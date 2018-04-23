import CustomFetch from '../utils/fetch';

let recordService = {
    //获取记录列表
    getRecords: (queryParams) => {
        let url="smr/record";
        return CustomFetch.get(url,queryParams);
    }
}

export default recordService;