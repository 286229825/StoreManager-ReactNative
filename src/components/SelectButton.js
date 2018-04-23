/*
 * @Author: zuhong.wu 
 * @Date: 2018-04-03 21:08:14 
 * @Last Modified by: zuhong.wu
 * @Last Modified time: 2018-04-04 14:40:43
 */
'use strict';

import React from 'react';
import {
    Button
} from 'antd-mobile';

class SelectButton extends React.Component {
    state = {
        selected: null
    }
    componentDidMount() {
        this.setState({
            selected: this.props.selected
        })
    }
    _buttonClick = () => {
        this.props.onChange(true);
    }
    render() {
        return (
            this.state.selected ?
                <Button type="ghost" onClick={this._buttonClick}>{this.props.text}</Button>
                :
                <Button onClick={this._buttonClick}>{this.props.text}</Button>
        )
    }
}

export default SelectButton;