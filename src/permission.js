import router from './router'
import store from './store'
import { getStore } from '@/utils/session'

// 借鉴v-e-a 的思路 设置一个免登录的白名单
const whiteList = ['/login']
router.beforeEach((to, from, next)=> {
    if (getStore('token')) { // 权限校验 如果没有 token  直接重定向到登录
        if (to.path === '/login') {
            next({path: '/'})
        } else {
            if (!store.getters.name) {
                store.dispatch('getUserInfo').then(res=>{
                    console.log(res);
                    next()
                }).catch(err=>{
                    store.dispatch('loginOut').then(()=>{
                        next('/login')
                    })
                })
            }else {
                next()
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next('/login') // 否则全部重定向到登录页
        }
    }
})
