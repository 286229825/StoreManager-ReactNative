/*
 * @Author: zuhong.wu 
 * @Date: 2018-03-27 22:01:26 
 * @Last Modified by: zuhong.wu
 * @Last Modified time: 2018-03-28 10:15:45
 */
'use strict';

/**
 * 数字说明
 * text:说明文字
 * num:数字
 * textcolor:文字颜色
 * numcolor:数字颜色
 * flex:占位大小
 */

import React from 'react';
import {View,Text} from 'react-native';
import {WhiteSpace} from 'antd-mobile';

class NumDisc extends React.Component{
    render(){
        const {text,num,textcolor,numcolor,flex}=this.props;
        return (
            <View style={{
                flex,
                alignItems:'center',
                borderRightWidth:0.2,
                borderRightColor:'#696969'
            }}>
                <Text style={{color:textcolor,fontSize:14}}>{text}</Text>
                <WhiteSpace />
                <Text style={{color:numcolor,fontSize:16}}>{num}</Text>
            </View>
        )
    }
}

export default NumDisc;