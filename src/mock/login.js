const userMap = {
  admin: {
    role: 'admin',
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '超级管理员',
    phone:'13888585525',// 电话号码
    gender:'男',// 性别
  },
  editor: {
    role: 'editor',
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor',
    phone:'13888585525',// 电话号码
    gender:'男',// 性别
  }
}

export default {
  loginByUsername: config => {
    return userMap['admin']
  },

  getUserInfo : config =>{
    return userMap['admin']
  },
  logout: () => 'success'
}
