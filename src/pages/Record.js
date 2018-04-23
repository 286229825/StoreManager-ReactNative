/*
 * @Author: zuhong.wu 
 * @Date: 2018-03-27 10:35:50 
 * @Last Modified by: zuhong.wu
 * @Last Modified time: 2018-04-23 09:39:47
 */
'use strict';

/**
 * 记录(标签页)
 */

import React from 'react';
import {
    Modal,
    PickerView,
    List,
    Toast
} from 'antd-mobile';
import {
    Text,
    View,
    FlatList,
    DatePickerAndroid,
    TextInput
} from 'react-native';
import Common from '../common';
import Components from '../components';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import recordService from '../services/recordService';
import constant from '../constant/constant';
import moment from 'moment';
import momentLocale from 'moment/locale/zh-cn';

moment.updateLocale('zh-cn', momentLocale);

class Record extends React.Component {
    state = {
        selectedDate: null,//选中的日期时间戳（毫秒）
        isRefresh: false,
        records: [],
        selectedType: null,
        showModal: false,
        types: [
            [{
                label: '全部',
                value: 'all',
            }, {
                label: '销售',
                value: 'sale',
            }, {
                label: '进货',
                value: 'buy',
            }, {
                label: '退货',
                value: 'return',
            }, {
                label: '盘点',
                value: 'check',
            }],
        ]
    }
    //在页面渲染完成后加载数据
    componentDidMount() {
        this._getRecords(null);
    }
    //记录分类选择器改变后的回调
    _onChange = (value) => {
        debugger
        if (value[0] === 'all') {
            this.setState({
                selectedType: null
            })
        } else {
            this.setState({
                selectedType: value
            })
        }
    }
    //响应后台，获取记录数据
    _getRecords = (params) => {
        this.setState({
            records: recordService.getRecords(params)
        })
    }
    //选择分类的回调
    _selectOne = () => {
        this.setState({
            showModal: false
        })
        this._getRecords({ recordType: this.state.selectedType });
    }
    //记录项组件渲染
    _renderItem = ({ item }) =>
        <List.Item
            arrow="horizontal"
            multipleLine
            extra={'类别：' + item.type}
            onClick={() => { }}
        >
            {item.operator}
            <List.Item.Brief>单号：{item.number}</List.Item.Brief>
            <List.Item.Brief>日期：{item.date}</List.Item.Brief>
        </List.Item>
    //下拉刷新
    _onRefresh = () => {
    }
    //搜索框搜索
    _onSearch = (value) => {

    }
    //点击日历图标，打开日历组件
    _openCalendar = () => {
        DatePickerAndroid.open({
            mode: 'calendar',
            date: this.state.selectedDate ? this.state.selectedDate : new Date().getTime()
        }).then(value => {
            if (value.action === DatePickerAndroid.dismissedAction) {
                this.setState({
                    selectedDate: null
                })
            } else {
                const month = value.month + 1;
                const str = value.year + "-" + month + "-" + value.day;
                const date = moment(str, 'YYYY-MM-DD').valueOf()
                this.setState({
                    selectedDate: date
                })
            }
        })
    }
    render() {
        return (
            <View style={{
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'flex-start',
            }}>
                <Common.TabHeader
                    right={
                        this.state.selectedType ?
                            <FontAwesomeIcon size={28} name='filter' style={{ color: 'white' }} onPress={() => this.setState({ showModal: true })} />
                            :
                            <FeatherIcon size={28} name='filter' style={{ color: 'white' }} onPress={() => this.setState({ showModal: true })} />
                    }
                    center={<Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>记录</Text>}
                />
                <View style={{
                    flexDirection: 'row',
                    flex: 0.1,
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}>
                    <TextInput inlineImageLeft='search'
                        inlineImagePadding={20}
                        placeholder='输入操作员或单号查找'
                        style={{
                            width: constant.deviceW * 0.75,
                            marginLeft: 10,
                            marginRight: 40
                        }}
                        onChangeText={this._onSearch}
                    />
                    <FontAwesomeIcon size={28} name='calendar' style={{ color: this.state.selectedDate ? '#108ee9' : '#989898' }} onPress={this._openCalendar} />
                </View>
                <Modal
                    visible={this.state.showModal}
                    transparent
                    title="请选择记录类别"
                    popup={true}
                    footer={[
                        { text: '选择', onPress: this._selectOne },
                    ]}
                >
                    <PickerView
                        onChange={this._onChange}
                        value={this.state.selectedType}
                        data={this.state.types}
                        cascade={false}
                    />
                </Modal>
                <FlatList
                    data={this.state.records}
                    keyExtractor={(item, index) => 'key' + index}
                    renderItem={this._renderItem}
                    onRefresh={this._onRefresh}
                    refreshing={this.state.isRefresh}
                    ListFooterComponent={() => <Text style={{ textAlign: 'center', paddingBottom: 10, paddingTop: 10 }}>没有更多了</Text>}
                    ListHeaderComponent={() => <Text style={{ height: 10 }}></Text>}
                />
            </View>
        )
    }
}

export default Record;