/*
 * @Author: zuhong.wu 
 * @Date: 2018-04-04 14:48:31 
 * @Last Modified by: zuhong.wu
 * @Last Modified time: 2018-04-04 16:33:34
 */
'use strict';

import React from 'react';
import Echarts from 'native-echarts';
import constant from '../constant/constant';

class InComeChart extends React.Component {
    render() {
        const option = {
            title: {
                subtext: '总收入：2000.00元',
                left:'10%'
            },
            tooltip: {},
            legend: {
                data: ['销量', '收入']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }, {
                name: '收入',
                type: 'bar',
                data: [15, 25, 56, 20, 40, 10]
            }]
        };
        return (
            <Echarts option={option} height={constant.deviceH * 0.7} />
        )
    }
}

export default InComeChart;