/*
 * @Author: zuhong.wu 
 * @Date: 2018-03-24 19:33:42 
 * @Last Modified by: zuhong.wu
 * @Last Modified time: 2018-04-23 10:20:19
 */
'use strict';

/**
 * 程序入口
 */

import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Pages from './src/pages';
import { View, StyleSheet, Image } from 'react-native';
import { Badge } from 'antd-mobile';

//标签页
const TabNavigation = TabNavigator({
  Home: {
    screen: Pages.Home,
    navigationOptions: {
      tabBarLabel: '主页',
      tabBarIcon: ({ tintColor }) => (
        //会将有像素的地方的颜色都改变，最好是下载只有线框的png格式的图标
        <Image
          source={require('./src/assets/icons/outline-icons/32px/home.png')}
          style={[{ tintColor: tintColor }, styles.icon]}
        />
      ),
    }
  },
  Goods: {
    screen: Pages.Goods,
    navigationOptions: {
      tabBarLabel: '商品',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./src/assets/icons/outline-icons/32px/goods.png')}
          style={[{ tintColor: tintColor }, styles.icon]}
        />
      ),
    },
  },
  Record: {
    screen: Pages.Record,
    navigationOptions: {
      tabBarLabel: '记录',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./src/assets/icons/outline-icons/32px/record.png')}
          style={[{ tintColor: tintColor }, styles.icon]}
        />
      ),
    },
  },
  Statistics: {
    screen: Pages.Statistics,
    navigationOptions: {
      tabBarLabel: '报表',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./src/assets/icons/outline-icons/32px/statistics.png')}
          style={[{ tintColor: tintColor }, styles.icon]}
        />
      ),
    },
  },
  Mine: {
    screen: Pages.Mine,
    navigationOptions: {
      tabBarLabel: '我',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./src/assets/icons/outline-icons/32px/man.png')}
          style={[{ tintColor: tintColor }, styles.icon]}
        />
      ),
    },
  },
}, {
    lazy: false,//关闭懒加载，在打开程序的时候将标签栏全部加载
    animationEnabled: false, // 切换页面时不显示动画。默认为true
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
      activeTintColor: '#008AC9', // 文字和图片选中颜色，会将有像素的地方的颜色都改变，最好是下载只有线框的png格式的图标
      inactiveTintColor: '#999', // 文字和图片默认颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
      style: {
        backgroundColor: '#fff', // TabBar 背景色
        borderTopWidth: 1,//标签栏顶部边框宽度
        borderTopColor: '#E0E0E0',//标签栏顶部边框颜色
        height: 60//标签栏高度
      },
      labelStyle: {
        fontSize: 12, // 文字大小
        marginTop: 0//让文字和图标更紧凑一点
      },
    },
  });

//顶部导航栏的样式对象
const options = {
  //设置当前页面的导航标题名称
  headerTitle: '',
  headerTitleStyle: {
    textAlign: 'center',//让导航标题居中
    flex: 1,//要想让导航标题居中属性生效必须有这个属性
    fontSize:20//导航标题字体大小
  },
  //要想让导航标题正确的居中必须有这个属性
  headerRight: <View />,
  //设置导航栏返回箭头和文字的颜色
  headerTintColor: 'white',
  //设置当前页面的导航条样式
  headerStyle: {
    backgroundColor: '#108ee9',//背景色
  },
}

//导航器
const App = StackNavigator({
  Index: {
    screen: TabNavigation,
    navigationOptions: {
      header: null,
    }
  },
  SignUp: {
    screen: Pages.SignUp,
    navigationOptions: { ...options, headerTitle: '注册' },
  },
  Login: {
    screen: Pages.Login,
    navigationOptions: {
      header: null,
    }
  },
}, {
    initialRouteName: "Login"
  });

const styles = StyleSheet.create({
  icon: {
    height: 22,
    width: 22,
    resizeMode: 'contain'
  }
})

export default App;