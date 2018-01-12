const userMap = {
    admin: {
        role: 'admin',
        token: 'admin',
        introduction: '我是超级管理员',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: '超级管理员',
        phone: '13888585525',// 电话号码
        gender: '男',// 性别
    },
    editor: {
        role: 'editor',
        token: 'editor',
        introduction: '我是编辑',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor',
        phone: '13888585525',// 电话号码
        gender: '男',// 性别
    }
}

export default {
    loginByUsername: config => {
        let body = JSON.parse(config.body);
        if (body.name == 'admin') {
            return {
                info: userMap['admin'],
                code:'200'
            }
        } else if (body.name == 'editor') {
            return {
                info: userMap['editor'],
                code:'200'
            }
        } else {
            return {
                info:"",
                code:'400'
            }
        }
    },

    getUserInfo: config => {
        let body = JSON.parse(config.body);
        if (body.token == 'admin') {
            return {
                info: userMap['admin'],
                code:'200'
            }
        } else if (body.token == 'editor') {
            return {
                info: userMap['editor'],
                code:'200'
            }
        } else {
            return {
                info:"",
                code:'400'
            }
        }
    },
    logout: () => 'success'
}
