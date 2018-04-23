/*
 * @Author: zuhong.wu 
 * @Date: 2018-03-27 10:35:50 
 * @Last Modified by: zuhong.wu
 * @Last Modified time: 2018-04-04 16:24:32
 */
'use strict';

/**
 * 统计(标签页)
 */

import React from 'react';
import {
    Modal,
    List,
    WhiteSpace,
    Button,
    DatePicker
} from 'antd-mobile';
import {
    Text,
    View,
    TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Components from '../components';
import Common from '../common';
import moment from 'moment';

class Statistics extends React.Component {
    state = {
        showModal: false,
        selectedTag: '收入分析',
        showDatePicker: false,
        datePickerValue: new Date(),
    }
    _tagChange = (selected, Text) => {
        this.setState({
            showModal: false,
            selectedTag: Text
        })
    }
    render() {
        const moneyTags = ['收入分析', '支出分析', '收支概况', '利润统计', '员工统计', '经营业绩'];
        const otherTags = ['销售统计', '进货统计', '库存统计'];
        return (
            <View style={{
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'flex-start',
            }}>
                <Common.TabHeader
                    center={
                        <TouchableNativeFeedback onPress={() => this.setState({ showModal: true })}>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                                    {this.state.selectedTag}
                                </Text>
                                <Icon size={28} name={this.state.showModal ? 'md-arrow-dropup' : 'md-arrow-dropdown'} style={{ color: 'white', marginLeft: 5 }} />
                            </View>
                        </TouchableNativeFeedback>
                    }
                />
                <View style={{
                    flex: 0.1,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <DatePicker
                        mode='month'
                        // format='YYYY-MM'
                        visible={this.state.showDatePicker}
                        value={this.state.datePickerValue}
                        onOk={date => this.setState({ datePickerValue: date, showDatePicker: false })}
                        onDismiss={() => this.setState({ showDatePicker: false })}
                    />
                    <Text style={{ fontSize: 18 }} onPress={() => this.setState({ showDatePicker: true })}>{
                        moment(this.state.datePickerValue).format('YYYY-MM')
                    }</Text>
                </View>
                <View style={{
                    flex: 0.8,
                }}>
                    <WhiteSpace />
                    <Components.InComeChart />
                </View >
                <Modal
                    popup
                    visible={this.state.showModal}
                    animationType="slide-up"
                    maskClosable={false}
                >
                    <List
                        renderHeader={() => <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginTop: 10, marginLeft: 10 }}>资金报表</Text>}
                    >
                        <List.Item>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                {
                                    moneyTags.map((text, index) => {
                                        if (index < 3) {
                                            return (
                                                <Components.SelectButton key={index}
                                                    onChange={selected => this._tagChange(selected, text)}
                                                    selected={this.state.selectedTag === text ? true : false}
                                                    text={text}
                                                />
                                            )
                                        }
                                    })
                                }
                            </View>
                            <WhiteSpace />
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                {
                                    moneyTags.map((text, index) => {
                                        if (index >= 3) {
                                            return (
                                                <Components.SelectButton key={index}
                                                    onChange={selected => this._tagChange(selected, text)}
                                                    selected={this.state.selectedTag === text ? true : false}
                                                    text={text}
                                                />
                                            )
                                        }
                                    })
                                }
                            </View>
                        </List.Item>
                    </List>
                    <List
                        renderHeader={() => <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginTop: 20, marginLeft: 10 }}>进销存报表</Text>}
                    >
                        <List.Item>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 20
                            }}>
                                {
                                    otherTags.map((text, index) => {
                                        return (
                                            <Components.SelectButton key={index}
                                                onChange={selected => this._tagChange(selected, text)}
                                                selected={this.state.selectedTag === text ? true : false}
                                                text={text}
                                            />
                                        )
                                    })
                                }
                            </View>
                        </List.Item>
                    </List>
                </Modal>

            </View>
        )
    }
}

export default Statistics;
