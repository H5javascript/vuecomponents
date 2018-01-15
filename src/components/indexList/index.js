/**
 * Created by bao on 2018/1/12.
 */
import IndexList from './IndexList.vue'
import IndexGroup  from './IndexGroup.vue'
export default {
    install:function(Vue){
        Vue.component('indexList',IndexList);
        Vue.component('indexGroup',IndexGroup)
    }
}