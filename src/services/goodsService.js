import CustomFetch from '../utils/fetch';

let goodsService = {
    //获取商品列表
    getGoods: (queryParams) => {
        let url = "smr/goods";
        const GoodsList = [
            {
                key: 'A', data: [
                    { image: 'login.png', title: '蓝牙耳机', text: '售价：100', key: '0' },
                ]
            },
            {
                key: 'B', data: [
                    { image: 'login.png', title: '笔记本电脑', text: '售价：10000', key: '0' },
                ]
            },
            {
                key: 'C', data: [
                    { image: 'login.png', title: '羽绒服', text: '售价：200', key: '0' },
                ]
            },
            {
                key: 'D', data: [
                    { image: 'login.png', title: '运动跑鞋', text: '售价：500', key: 'D0' },
                    { image: 'login.png', title: 'java入门书籍', text: '售价：20', key: 'D1' },
                ]
            },
            {
                key: 'E', data: [
                    { image: 'login.png', title: '机器学习入门书籍', text: '售价：60', key: '0' },
                    { image: 'login.png', title: '吹风机', text: '售价：40', key: '1' },
                ]
            },
            {
                key: 'F', data: [
                    { image: 'login.png', title: '行李箱', text: '售价：100', key: '0' },
                    { image: 'login.png', title: '洗发水', text: '售价：40', key: '1' },
                ]
            },
            {
                key: 'G', data: [
                    { image: 'login.png', title: '洗衣液', text: '售价：20', key: '0' },
                    { image: 'login.png', title: '茶杯', text: '售价：10', key: '1' },
                ]
            },
            {
                key: 'H', data: [
                    { image: 'login.png', title: '剃须刀', text: '售价：20', key: '0' },
                    { image: 'login.png', title: '鼠标', text: '售价：20', key: '1' },
                ]
            },
            {
                key: 'I', data: [
                    { image: 'login.png', title: '机械键盘', text: '售价：50', key: '0' },
                    { image: 'login.png', title: '牛奶', text: '售价：60', key: '1' },
                ]
            },
            {
                key: 'J', data: [
                    { image: 'login.png', title: '台灯', text: '售价：40', key: '0' },
                    { image: 'login.png', title: '电风扇', text: '售价：30', key: '1' },
                ]
            },
        ]
        return GoodsList;
    },
    //获取商品类型
    getGoodsTypes: (queryParams) => {
        let url = "smr/goodsTypes";
        const goodsTypes = [
            { name: '食品', value: 'food' },
            { name: '书籍', value: 'book' },
            { name: '电器', value: 'electrical' },
            { name: '文具', value: 'stationery' },
            { name: '日化', value: 'daily' },
        ]
        return goodsTypes;
    }
}



export default goodsService;