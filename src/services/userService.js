import CustomFetch from '../utils/fetch';

let userService = {
    //获取用户列表
    getUsers: (queryParams) => {
        let url="smr/user";
        return CustomFetch.get(url,queryParams);
    },
    //新增一个用户
    addUser:(bodyParams,queryParams) => {
        let url="smr/user";
        return CustomFetch.post(url,bodyParams,queryParams);
    },
    //校验用户的帐号、昵称、店名是否存在，用于用户注册的校验
    checkUser:(queryParams) => {
        let url="smr/check/login";
        return CustomFetch.get(url,queryParams);
    }
}

export default userService;