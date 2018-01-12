/**
 * Created by bao on 2018/1/11.
 */
import { loginIn, logout, getUserInfo } from '@/api/login'
import { store, deleteStore } from '@/utils/session'
const user = {
    state:{
        name:'',// 姓名
        phone:'',// 电话号码
        gender:'',// 性别
        avatar:'',// 头像
        token:'',
        role:'', // 角色
    },
    mutations:{
        SET_NAME:(state, name)=>{
            state.name = name
        },
        SET_PHONE:(state, phone)=>{
            state.phone = phone
        },
        SET_GENDER:(state, gender)=>{
            state.gender = gender
        },
        SET_TOKEN:(state, token)=>{
            state.token = token
        },
        SET_AVATAR:(state, avatr)=>{
            state.avatar = avatr
        },
        SET_ROLE:(state, role)=>{
            state.role = role
        }
    },
    actions:{
        LoginIn({commit}, userInfo){
            return new Promise((resolve,reject)=>{
                loginIn(userInfo).then(response=>{
                    let {data} = response;
                    store('token',data.token);
                    commit('SET_TOKEN',data.token);
                    commit('SET_NAME',data.name);
                    commit('SET_PHONE',data.phone);
                    commit('SET_GENDER',data.gender);
                    commit('SET_AVATAR',data.avatar);
                    commit('SET_ROLE',data.role);
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        loginOut({commit}){
            deleteStore('token')
        },
        getUserInfo({commit} ,token) {
            return new Promise((resolve,reject)=>{
                getUserInfo(token).then(response=>{
                    let {data} = response;
                    store('token',data.token);
                    commit('SET_TOKEN',data.token);
                    commit('SET_NAME',data.name);
                    commit('SET_PHONE',data.phone);
                    commit('SET_GENDER',data.gender);
                    commit('SET_AVATAR',data.avatar);
                    commit('SET_ROLE',data.role);
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        }
    }
}

export default user