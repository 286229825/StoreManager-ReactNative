/*
 * @Author: zuhong.wu 
 * @Date: 2018-03-27 10:35:50 
 * @Last Modified by: zuhong.wu
 * @Last Modified time: 2018-04-03 18:07:04
 */
'use strict';

/**
 * 我(标签页)
 */

import React from 'react';
import {
    List,
    WhiteSpace,
    Badge
} from 'antd-mobile';
import {
    View,
    Image,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Mine extends React.Component {
    state = {
        showDot: false
    }
    _myOrderPress = () => {

    }
    iconSize = 28;
    iconMarginRight = 10;
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    flexDirection: 'row',
                    flex: 0.25,
                    backgroundColor: '#108ee9'
                }}>
                    <View style={{
                        flex: 0.3,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image source={require('../assets/login.png')} style={{ width: 90, height: 90 }} />
                    </View>
                    <View style={{
                        flex: 0.5,
                        justifyContent: 'center',
                    }}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>小吴    <Text style={{ color: '#F0F0F0', fontWeight: 'normal' }}>老板</Text></Text>
                        <WhiteSpace />
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>您的店名</Text>
                    </View>
                    <View style={{
                        flex: 0.2,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Badge dot={this.state.showDot}>
                            <Icon size={32} name='md-notifications' style={{ color: 'white' }} onPress={this._myOrderPress} />
                        </Badge>
                    </View>
                </View>
                <WhiteSpace />
                <WhiteSpace />
                <View style={{
                    flex: 0.75,
                }}>
                    <List>
                        <List.Item
                            thumb={<Icon size={this.iconSize} name='md-list-box' style={{ color: '#108ee9', marginRight: this.iconMarginRight }} onPress={this._myOrderPress} />}
                            arrow="horizontal"
                            onClick={() => { }}
                        >
                            我的订单
                    </List.Item>
                    </List>
                    <WhiteSpace />
                    <List>
                        <List.Item
                            thumb={<Icon size={this.iconSize} name='md-basket' style={{ color: '#FF0000', marginRight: this.iconMarginRight }} onPress={this._myOrderPress} />}
                            arrow="horizontal"
                            onClick={() => { }}
                        >
                            供应商管理
                    </List.Item>
                        <List.Item
                            thumb={<Icon size={this.iconSize} name='md-people' style={{ color: '#108ee9', marginRight: this.iconMarginRight }} onPress={this._myOrderPress} />}
                            onClick={() => { }}
                            arrow="horizontal"
                        >
                            客户管理
                    </List.Item>
                        <List.Item
                            thumb={<Icon size={this.iconSize} name='md-rose' style={{ color: '#108ee9', marginRight: this.iconMarginRight }} onPress={this._myOrderPress} />}
                            onClick={() => { }}
                            arrow="horizontal"
                        >
                            客户报价
                    </List.Item>
                    </List>
                    <WhiteSpace />
                    <List>
                        <List.Item
                            thumb={<Icon size={this.iconSize} name='md-home' style={{ color: '#FF0000', marginRight: this.iconMarginRight }} onPress={this._myOrderPress} />}
                            arrow="horizontal"
                            onClick={() => { }}
                        >
                            店铺管理
                    </List.Item>
                        <List.Item
                            thumb={<Icon size={this.iconSize} name='md-text' style={{ color: '#FF0000', marginRight: this.iconMarginRight }} onPress={this._myOrderPress} />}
                            onClick={() => { }}
                            arrow="horizontal"
                        >
                            意见反馈
                    </List.Item>
                    </List>
                    <WhiteSpace />
                    <List>
                        <List.Item
                            thumb={<Icon size={this.iconSize} name='md-settings' style={{ color: '#108ee9', marginRight: this.iconMarginRight }} onPress={this._myOrderPress} />}
                            arrow="horizontal"
                            onClick={() => { }}
                        >
                            设置
                    </List.Item>
                    </List>
                </View>
            </View>
        )
    }
}

export default Mine;