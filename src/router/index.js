import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Login from '@/views/login'
import Errload from '@/views/errload'

import SectionA from '@/views/sectionA'
import SectionB from '@/views/sectionB'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/sectiona',
            name: 'sectiona',
            component: SectionA
        },
        {
            path: '/sectionb',
            name: 'sectionb',
            component: SectionB
        },
        {
            path: '*',
            name: 'errorload',
            component: Errload
        }
    ]
})
