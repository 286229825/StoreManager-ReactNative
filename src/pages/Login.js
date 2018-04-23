/*
 * @Author: zuhong.wu 
 * @Date: 2018-03-24 20:58:15 
 * @Last Modified by: zuhong.wu
 * @Last Modified time: 2018-03-27 10:20:37
 */
'use strict';

/**
 * 登录页
 */

import React from 'react';
import {View, Image } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Components from '../components';


class Login extends React.Component {
    //在组件加载完后隐藏启动页
    componentDidMount() {
        SplashScreen.hide();
    }
    //导航器
    navigation = (page,params) => {
        const {navigate}= this.props.navigation; 
        navigate(page, params);
    }
    //登录成功，导航到首页
    login = () => {
        this.navigation('Home');
    }
    //导航到注册页面
    signup = () => {
        this.navigation('SignUp');
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
                    flex: 0.6,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    <Image source={require('../assets/login.png')}
                        style={{marginTop:60}} />
                </View>
                <Components.LoginForm 
                    login={this.login} 
                    signup={this.signup}
                    name={this.props.navigation.state.params?this.props.navigation.state.params.name:''} 
                />
            </View>
        )
    }
}
export default Login;