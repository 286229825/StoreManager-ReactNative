/*
 * @Author: zuhong.wu 
 * @Date: 2018-04-02 14:25:45 
 * @Last Modified by: zuhong.wu
 * @Last Modified time: 2018-04-02 15:23:41
 */
'use strict';

/**
 * 右侧字母搜索栏
 * onPressText：点击字母的回调，会将当前字母作为回传。
 */

import React from 'react';
import {
    View,
    Text,
    TouchableNativeFeedback,
    ToastAndroid
} from 'react-native';
import constant from '../constant/constant';

class LetterSearchBar extends React.Component {
    render() {
        const letters = ['@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '$'];
        const letterHeight = constant.deviceH * 0.7 / 28;
        return (
            <View style={{
                flexDirection: 'column',
                flex: 0.1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
            }}>
                {
                    letters.map((value, index) => {
                        return (
                            <TouchableNativeFeedback
                                key={index}
                                onPress={() => this.props.onPressText(value)}
                                background={TouchableNativeFeedback.Ripple('#686868', false)}
                            >
                                <View style={{ width: letterHeight, height: letterHeight, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12 }}>{value}</Text>
                                </View>
                            </TouchableNativeFeedback>
                        )
                    })
                }
            </View>
        )
    }
}

export default LetterSearchBar;