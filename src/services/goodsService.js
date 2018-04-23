import CustomFetch from '../utils/fetch';

let goodsService = {
    //获取商品列表
    getGoods:(queryParams)=>{
        let url="smr/goods";
        return CustomFetch.get(url,queryParams);
    }
}

export default goodsService;