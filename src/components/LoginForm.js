/*
 * @Author: zuhong.wu 
 * @Date: 2018-03-25 10:21:43 
 * @Last Modified by: zuhong.wu
 * @Last Modified time: 2018-03-27 10:20:21
 */
'use strict';

/**
 * 登录表单
 * login：登录成功后的回调函数
 * signup：点击注册后的回调函数
 */

import React from 'react';
import { Button, InputItem, WhiteSpace, WingBlank, List, NoticeBar } from 'antd-mobile';
import { Text, View } from 'react-native';
import { createForm } from 'rc-form';
import userService from '../services/userService';

class LoginForm extends React.Component {
    state={
        loginError:''//登录时响应后台后的错误信息
    }
    componentDidMount(){
        if(this.props.name){
            this.props.form.setFieldsValue({
                name:this.props.name
            })
        }
    }
    //点击登录的回调
    submit = () => {
        this.props.form.validateFields((error, value) => {
            //如果校验通过则响应后台
            if (!error) {
                userService.getUsers(value).then(data => {
                    if (data) {
                        //如果有记录返回，消除错误信息
                        this.setState({
                            loginError:''
                        })
                        //将用户 id 保存到全局变量
                        window.id=data.id;
                        //跳转
                        this.props.login();
                    } else {
                        //如果没有记录返回，提示错误信息
                        this.setState({
                            loginError:'帐号或密码错误！请重新输入！'
                        })
                    }
                }).catch(error => {
                    this.setState({
                        loginError:'后台错误！请联系系统管理员！'
                    })
                })
            }
        })
    }
    render() {
        let errors;
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <View style={{
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'flex-start',
            }}>
                <WingBlank>
                    <List>
                        <InputItem
                            {...getFieldProps('name', {
                                rules: [{ required: true, message: '帐号不能为空！' }]
                            })}
                            placeholder="请输入帐号"
                        >帐号</InputItem>
                        <Text style={{ color: 'red', marginLeft: 96 }}>
                            {(errors = getFieldError('name')) ? errors.join(',') : null}
                        </Text>
                        <WhiteSpace />
                        <InputItem
                            {...getFieldProps('password', {
                                rules: [{ required: true, message: '密码不能为空！' }]
                            })}
                            placeholder="请输入密码"
                            type='password'
                        >密码</InputItem>
                        <Text style={{ color: 'red', marginLeft: 96 }}>
                            {(errors = getFieldError('password')) ? errors.join(',') : null}
                        </Text>
                        <WhiteSpace />

                        <WhiteSpace />
                        <Button type='primary'
                            onClick={this.submit}>登录</Button>
                    </List>
                    <WhiteSpace />
                    <WhiteSpace />
                    <Text style={{ textAlign: 'right' }}>
                        还没有店仆？
                    <Text onPress={this.props.signup}
                            style={{ color: '#1e90ff', fontWeight: 'bold' }}>立即注册</Text>
                    </Text>
                </WingBlank>
                
                <View style={{
                    justifyContent: 'flex-end',
                    flex: 1,
                }}>
                {this.state.loginError?
                    <NoticeBar mode="closable">
                        {this.state.loginError}
                    </NoticeBar>:null
                }
                </View>
            </View>
        )
    }
}

export default LoginForm = createForm()(LoginForm);