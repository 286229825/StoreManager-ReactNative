/*
 * @Author: zuhong.wu 
 * @Date: 2018-03-28 14:30:58 
 * @Last Modified by: zuhong.wu
 * @Last Modified time: 2018-04-02 14:08:57
 */
'use strict';

/**
 * 常量
 */

import { Dimensions } from 'react-native';

const constant = {
    deviceH:Dimensions.get('window').height,//当前设备屏幕高度，小米3为640
    deviceW:Dimensions.get('window').width,//当前设备屏幕宽度
    serverIp:'http://172.17.76.55/',//服务器地址
}

export default constant;