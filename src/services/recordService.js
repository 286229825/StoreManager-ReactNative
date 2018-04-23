import CustomFetch from '../utils/fetch';

let recordService = {
    //获取记录列表
    getRecords: (queryParams) => {
        let url = "smr/record";
        const records = [
            {
                operator: '小明',
                number: '12121212',
                date: '2017-09-12',
                type: '进货',
                money: 100
            }, {
                operator: '小赵',
                number: '12121212',
                date: '2017-09-12',
                type: '进货',
                money: 100
            }, {
                operator: '小吴',
                number: '12121212',
                date: '2017-09-12',
                type: '进货',
                money: 100
            }, {
                operator: '小刘',
                number: '12121212',
                date: '2017-09-12',
                type: '销售',
                money: 100
            }, {
                operator: '小张',
                number: '12121212',
                date: '2017-09-12',
                type: '销售',
                money: 100
            }, {
                operator: '张老板',
                number: '12121212',
                date: '2017-09-12',
                type: '销售',
                money: 100
            },
        ]
        return records;
    }
}

export default recordService;