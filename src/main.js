// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './permission'
import './mock'
import Calender from '@/components/calender'
import IndexList from '@/components/indexList'

Vue.config.productionTip = false

Vue.use(Calender);
Vue.use(IndexList);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
