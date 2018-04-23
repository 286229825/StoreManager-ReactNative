/*
 * @Author: zuhong.wu 
 * @Date: 2018-03-27 19:15:04 
 * @Last Modified by: zuhong.wu
 * @Last Modified time: 2018-04-04 15:09:08
 */
'use strict';

/**
 * 标签页的头部
 * left:左边的组件
 * center：中间的组件
 * right:右边的组件
 */

import React from 'react';
import { Button } from 'antd-mobile';
import { View, Text, StyleSheet } from 'react-native';

class TabHeader extends React.Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                flex: 0.1,
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#108ee9'
            }}>
                <View style={[styles.view,{alignItems: 'flex-start',marginLeft:10}]}>{this.props.left ? this.props.left : <Text />}</View>
                <View style={[styles.view,{alignItems: 'center'}]}>{this.props.center ? this.props.center : <Text />}</View>
                <View style={[styles.view,{alignItems: 'flex-end',marginRight:10}]}>{this.props.right ? this.props.right : <Text />}</View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'column',
        flex: 0.333333,
        justifyContent: 'flex-start',
    }
})

export default TabHeader;