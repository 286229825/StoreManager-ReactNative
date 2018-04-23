/*
 * @Author: zuhong.wu 
 * @Date: 2018-03-27 10:35:50 
 * @Last Modified by: zuhong.wu
 * @Last Modified time: 2018-04-23 09:49:41
 */
'use strict';

/**
 * 商品(标签页)
 */

import React from 'react';
import { View, Text, Picker, TextInput, Image, RefreshControl, ScrollView, SectionList } from 'react-native';
import { List, WhiteSpace, Toast } from 'antd-mobile';
import Icon from 'react-native-vector-icons/Ionicons';
import Common from '../common';
import constant from '../constant/constant';
import goodsService from '../services/goodsService';
import Components from '../components';

class Goods extends React.Component {
    state = {
        goodsTypes: [],
        goodsList: [],
        selectedType: 'all',
    }
    //在页面渲染完成后加载数据
    componentDidMount() {
        this.getGoodsList(null);
        this.getGoodsTypes(null);
    }
    //获取商品类别
    getGoodsTypes = (params) => {
        this.setState({
            goodsTypes: goodsService.getGoodsTypes(params)
        })
    }
    //获取商品列表
    getGoodsList = (params) => {
        this.setState({
            goodsList: goodsService.getGoods(params)
        })
    }
    //点击盘点，打开盘点页面
    checkClick = () => {
    }
    //点击添加图标，打开添加商品页面
    addClick = () => {

    }
    //搜索框的值改变后的回调函数
    searchChange = (value) => {

    }
    //点击扫描图标，打开扫描器
    scanClick = () => {

    }
    //点击刷新图标，刷新商品列表
    refreshClick = () => {
        Toast.loading('刷新中…', 0);
        this.getGoodsList(null);
    }
    render() {
        const newGoodsTypes = [{ name: '全部类别', value: 'all' }, ...this.state.goodsTypes];
        return (
            <View style={{
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'flex-start',
            }}>
                <Common.TabHeader
                    left={<Text onPress={this.checkClick} style={{ color: 'white', fontSize: 20 }}>盘点</Text>}
                    center={<Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>商品库存</Text>}
                    right={<Icon size={32} name='md-add' style={{ color: 'white' }} onPress={this.addClick} />}
                />
                <View style={{
                    flexDirection: 'row',
                    flex: 0.1,
                    backgroundColor: 'white'
                }}>
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 0.3,
                    }}>
                        <Picker
                            selectedValue={this.state.selectedType}
                            onValueChange={(value) => this.setState({ selectedType: value })}
                            style={{
                                height: constant.deviceH * 0.1 - 30,
                                width: constant.deviceW * 0.3 - 20,
                                backgroundColor: '#eaf1f9',
                                color: '#888888'
                            }}
                        >
                            {
                                newGoodsTypes.map((item, index) => {
                                    return (
                                        <Picker.Item label={item.name} value={item.value} key={index} />
                                    )
                                })
                            }
                        </Picker>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        flex: 0.6,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TextInput inlineImageLeft='search'
                            inlineImagePadding={20}
                            placeholder='输入商品名或条形码查找'
                            style={{
                                width: constant.deviceW * 0.6 - 20
                            }}
                            onChangeText={this.searchChange}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        flex: 0.1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Icon size={24} name='md-qr-scanner' style={{ color: '#909090' }} onPress={this.scanClick} />
                    </View>
                </View>
                <Components.GoodsList goodsList={this.state.goodsList} />
            </View>
        )
    }
}

export default Goods;