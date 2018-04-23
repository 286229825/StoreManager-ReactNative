/*
 * @Author: zuhong.wu 
 * @Date: 2018-04-02 12:03:23 
 * @Last Modified by: zuhong.wu
 * @Last Modified time: 2018-04-02 16:10:05
 */
'use strict';

/**
 * 商品列表组件
 */

import React from 'react';
import {
    SectionList,
    StyleSheet,
    Text,
    View,
    Image,
    PixelRatio
} from 'react-native';
import {
    Toast,
    List,
    SwipeAction
} from 'antd-mobile';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout'
import constant from '../constant/constant';
import Common from '../common';

class GoodsList extends React.Component {
    state = {
        isRefreshing: false,
        sections: [
            {
                key: 'A', data: [
                    { title: 'Item In Header Section', text: 'Section s1', key: '0' },
                ]
            },
            {
                key: 'B', data: [
                    { title: 'Item In Header Section', text: 'Section s1', key: '0' },
                ]
            },
            {
                key: 'C', data: [
                    { title: 'Item In Header Section', text: 'Section s1', key: '0' },
                ]
            },
            {
                key: 'D', data: [
                    { noImage: true, title: 'First item', text: 'Section s2', key: 'D0' },
                    { noImage: true, title: 'Second item', text: 'Section s2', key: 'D1' },
                ]
            },
            {
                key: 'E', data: [
                    { noImage: true, title: 'First item', text: 'Section s2', key: '0' },
                    { noImage: true, title: 'Second item', text: 'Section s2', key: '1' },
                ]
            },
            {
                key: 'F', data: [
                    { noImage: true, title: 'First item', text: 'Section s2', key: '0' },
                    { noImage: true, title: 'Second item', text: 'Section s2', key: '1' },
                ]
            },
            {
                key: 'G', data: [
                    { noImage: true, title: 'First item', text: 'Section s2', key: '0' },
                    { noImage: true, title: 'Second item', text: 'Section s2', key: '1' },
                ]
            },
            {
                key: 'H', data: [
                    { noImage: true, title: 'First item', text: 'Section s2', key: '0' },
                    { noImage: true, title: 'Second item', text: 'Section s2', key: '1' },
                ]
            },
            {
                key: 'I', data: [
                    { noImage: true, title: 'First item', text: 'Section s2', key: '0' },
                    { noImage: true, title: 'Second item', text: 'Section s2', key: '1' },
                ]
            },
            {
                key: 'J', data: [
                    { noImage: true, title: 'First item', text: 'Section s2', key: '0' },
                    { noImage: true, title: 'Second item', text: 'Section s2', key: '1' },
                ]
            },
        ]
    }

    constructor(props) {
        super(props)

        this.getItemLayout = sectionListGetItemLayout({
            // The height of the row with rowData at the given sectionIndex and rowIndex
            getItemHeight: (rowData, sectionIndex, rowIndex) => 40,
            // These four properties are optional
            getSeparatorHeight: () => 15, // The height of your separators
            // getSectionHeaderHeight: () => 20, // The height of your section headers
            getSectionFooterHeight: () => 45, // The height of your section footers
            // listHeaderHeight: 40, // The height of your list header
        })
    }

    componentDidMount() {
    }
    //商品项组件，支持滑动显示操作按钮
    _renderItemComponent = ({ item }) => (
        <SwipeAction
            style={{ backgroundColor: 'gray' }}
            autoClose
            right={[
                {
                    text: 'Cancel',
                    onPress: () => {return null},
                    style: { backgroundColor: '#ddd', color: 'white' },
                },
                {
                    text: 'Delete',
                    onPress: () => {return null},
                    style: { backgroundColor: '#F4333C', color: 'white' },
                },
            ]}
            onOpen={()=>{return null}}
            onClose={()=>{return null}}
        >
            <List.Item
                arrow="empty"
                thumb={<Image source={{ uri: item.key }} style={{ width: 50, height: 50, marginRight: 10 }} />}
                multipleLine
                onClick={() => { }}
            >
                {item.title}<List.Item.Brief>{item.text}</List.Item.Brief>
            </List.Item>
        </SwipeAction>
    )

    sectionKey = null;
    //商品分组之间的间隔
    _renderSectionSeparator = (item) => {
        if (item.section.key === this.sectionKey) {
            return <Text></Text>;
        } else {
            this.sectionKey = item.section.key;
            return <Text style={{ marginLeft: 10 }}>{item.section.key}</Text>
        }
    }
    //下拉刷新
    _onRefresh = () => {
        this.setState({
            isRefreshing: true
        })
        setTimeout(() => {
            this.setState({
                isRefreshing: false
            })
        }, 3)
    }
    //在点击右侧字母搜索栏的字母后的回调。（value：点击的字母）
    _onPressText = (value) => {
        const newSections = [...this.state.sections];
        if (value === '@') {
            this.sectionList.scrollToLocation({
                sectionIndex: 0,
                itemIndex: 0,
            });
            return;
        }
        if (value === '$') {
            this.sectionList.scrollToLocation({
                sectionIndex: newSections.length - 1,
                itemIndex: 0,
            });
        }
        for (let i = 0; i < newSections.length; i++) {
            if (newSections[i].key === value) {
                this.sectionList.scrollToLocation({
                    sectionIndex: i,
                    itemIndex: 0,
                });
            }
        }
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                flex: 1,
            }}>
                <SectionList
                    ref={ref => this.sectionList = ref}
                    getItemLayout={this.getItemLayout}
                    ListFooterComponent={() => <Text style={{ textAlign: 'center', paddingBottom: 10, paddingTop: 10 }}>没有更多了</Text>}
                    SectionSeparatorComponent={this._renderSectionSeparator}
                    enableVirtualization={true}
                    onRefresh={this._onRefresh}
                    refreshing={this.state.isRefreshing}
                    renderItem={this._renderItemComponent}
                    sections={this.state.sections}
                />
                <Common.LetterSearchBar onPressText={this._onPressText} />
            </View>
        )
    }
}

export default GoodsList;