/*
 * @Author: zuhong.wu 
 * @Date: 2018-03-26 12:39:40 
 * @Last Modified by: zuhong.wu
 * @Last Modified time: 2018-03-27 10:04:35
 */
'use strict';

/**
 * 注册页
 */

import React from 'react';
import { Button, InputItem, WhiteSpace, WingBlank, List, NoticeBar, Toast } from 'antd-mobile';
import { Text, View } from 'react-native';
import { createForm } from 'rc-form';
import userService from '../services/userService';

class SignUp extends React.Component {
    state = {
        signError: ''//注册时响应后台的错误信息
    }
    componentDidMount(){
    }
    submit = () => {
        this.props.form.validateFields((error, value) => {
            //如果校验通过则响应后台
            if (!error) {
                Toast.loading('登录中…', 0);
                userService.checkUser(value).then(exist => {
                    //如果帐号、昵称、店名已存在，则提示错误信息
                    if (exist) {
                        let errors = {};
                        if (exist.name) {
                            errors.name = {
                                value: values.name,
                                errors: [new Error('帐号已被占用！')],
                            }
                        } else if (exist.nickname) {
                            errors.nickname = {
                                value: values.nickname,
                                errors: [new Error('昵称已被占用！')],
                            }
                        } else if (exist.storename) {
                            errors.storename = {
                                value: values.storename,
                                errors: [new Error('店名已被占用！')],
                            }
                        }
                        this.props.form.setFields(errors);
                    } else {
                        userService.addUser(value, null).then(data => {
                            this.setState({
                                signError: ''
                            })
                            Toast.success('注册成功！即将去登录！', 2, ()=>{
                                const { navigate } = this.props.navigation;
                                navigate('Login', { name: data.name });
                            })
                        })
                    }
                    Toast.hide();
                }).catch(error => {
                    this.setState({
                        signError: '后台错误！请联系系统管理员！'
                    })
                    Toast.hide();
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
                    <WhiteSpace />
                    <WhiteSpace />
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
                            {...getFieldProps('nickname', {
                                rules: [{ required: true, message: '昵称不能为空！' }]
                            })}
                            placeholder="请输入昵称"
                        >昵称</InputItem>
                        <Text style={{ color: 'red', marginLeft: 96 }}>
                            {(errors = getFieldError('nickname')) ? errors.join(',') : null}
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
                        <InputItem
                            {...getFieldProps('email', {
                                rules: [{ required: true, message: '邮箱不能为空！' }, {
                                    type: 'email', message: '邮箱格式错误！'
                                }]
                            })}
                            placeholder="请输入邮箱"
                        >邮箱</InputItem>
                        <Text style={{ color: 'red', marginLeft: 96 }}>
                            {(errors = getFieldError('email')) ? errors.join(',') : null}
                        </Text>
                        <WhiteSpace />
                        <InputItem
                            {...getFieldProps('tel', {
                                rules: [{ required: true, message: '手机不能为空！' }, {
                                    pattern: '/^[1][3,4,5,7,8][0-9]{9}$/', message: '手机号码格式错误！'
                                }]
                            })}
                            placeholder="请输入手机号码"
                        >手机</InputItem>
                        <Text style={{ color: 'red', marginLeft: 96 }}>
                            {(errors = getFieldError('tel')) ? errors.join(',') : null}
                        </Text>
                        <WhiteSpace />
                        <InputItem
                            {...getFieldProps('storename', {
                                rules: [{ required: true, message: '店名不能为空！' }]
                            })}
                            placeholder="请输入店名"
                        >店名</InputItem>
                        <Text style={{ color: 'red', marginLeft: 96 }}>
                            {(errors = getFieldError('storename')) ? errors.join(',') : null}
                        </Text>
                        <WhiteSpace />
                        <WhiteSpace />
                        <Button type='primary'
                            onClick={this.submit}>注册</Button>
                    </List>
                </WingBlank>
                <View style={{
                    justifyContent: 'flex-end',
                    flex: 1,
                }}>
                    {this.state.signError ?
                        <NoticeBar mode="closable">
                            {this.state.signError}
                        </NoticeBar> : null
                    }
                </View>
            </View>
        )
    }
}

export default SignUp = createForm()(SignUp);