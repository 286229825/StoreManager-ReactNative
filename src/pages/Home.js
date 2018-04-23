/*
 * @Author: zuhong.wu 
 * @Date: 2018-03-24 19:27:03 
 * @Last Modified by: zuhong.wu
 * @Last Modified time: 2018-03-28 15:41:08
 */
'use strict';

/**
 * 主页(标签页)
 */

import React from 'react';
import { Button, SearchBar } from 'antd-mobile';
import { View, Text, StyleSheet, Image } from 'react-native';
import Common from '../common';
import LinearGradient from 'react-native-linear-gradient';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import constant from '../constant/constant';

class Home extends React.Component {
    //点击扫码，打开扫描器
    openScanner = () => {

    }
    //点击开单，打开开单页面
    openOrder = () => {

    }
    //点击往来单位，打开往来单位页面
    openContacts = () => {

    }
    render() {
        return (
            <View style={{
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'flex-start',
            }}>
                <View style={{
                    flexDirection: 'row',
                    flex: 0.6
                }}>
                    <LinearGradient
                        start={{ x: 0.25, y: 0.25 }} end={{ x: 0.75, y: 0.75 }}
                        colors={['#108ee9', '#9fccec']}
                        style={{ flex: 1 }}
                    >
                        <Image source={require('../assets/login.png')}
                            style={{
                                width:200,
                                height:200,
                                marginLeft:(constant.deviceW-200)/2,
                                marginTop:(constant.deviceH * 0.6-200-80)/2
                            }} />
                        <Text style={{
                            textAlign:'center',
                            fontSize:24,
                            fontWeight:'bold',
                            color:'white',
                            marginTop:10
                        }}>您的店名</Text>
                    </LinearGradient>
                </View>
                <View style={{
                    flexDirection: 'row',
                    flex: 0.12,
                    backgroundColor: '#4da5e4',
                    alignItems: 'center'
                }}>
                    <Common.NumDisc
                        text='本月销量(件)'
                        num='100'
                        textcolor='white'
                        numcolor='white'
                        flex={0.4} />
                    <Common.NumDisc
                        text='本月销售额(元)'
                        num='10000'
                        textcolor='white'
                        numcolor='white'
                        flex={0.4} />
                    <Common.NumDisc
                        text='库存数量(件)'
                        num='10000'
                        textcolor='white'
                        numcolor='white'
                        flex={0.3} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    flex: 0.28,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    backgroundColor: 'white'
                }}>
                    <ActionButton
                        onPress={this.openScanner}
                        offsetY={60}
                        buttonColor="#108ee9"
                        position='left'
                        renderIcon={
                            () => <Icon name="md-qr-scanner" style={{ fontSize: 30, color: 'white' }} />
                        }
                    />
                    <Text style={{ fontSize: 14, marginTop: 102, marginLeft: 45 }}>扫码</Text>
                    <ActionButton
                        onPress={this.openOrder}
                        offsetY={60}
                        size={68}
                        buttonColor="#108ee9"
                        position='center'
                        renderIcon={
                            () => <Icon name="md-add" style={{ fontSize: 40, color: 'white' }} />
                        }
                    />
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 100, marginLeft: 90 }}>开单</Text>
                    <ActionButton
                        onPress={this.openContacts}
                        offsetY={60}
                        buttonColor="#108ee9"
                        position='right'
                        renderIcon={
                            () => <Icon name="md-contacts" style={{ fontSize: 30, color: 'white' }} />
                        }
                    />
                    <Text style={{ fontSize: 14, marginTop: 102, marginLeft: 80 }}>往来单位</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
})

export default Home;