import CustomFetch from '../utils/fetch';

let userService = {
    //获取用户列表
    getUsers: (queryParams) => {
        let url="smr/user";
        const UserList=[{
            id:'YH111111',
            name:'xiaoqiang',
            age:12
        },{
            id:'YH222222',
            name:'xiaoliu',
            age:16
        }]
        return UserList;
    },
    //新增一个用户
    addUser:(bodyParams,queryParams) => {
        let url="smr/user";
        return bodyParams;
    },
    //校验用户的帐号、昵称、店名是否存在，用于用户注册的校验
    checkUser:(queryParams) => {
        let url="smr/check/login";
        return null;
    }
}

export default userService;