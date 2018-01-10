import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sectiona from '@/components/sectiona'
import err from '@/components/404'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/seca',
            name: 'sectiona',
            component: sectiona
        },
        {
            path:"*",
            name:'err',
            component:err
        }
    ]
})
