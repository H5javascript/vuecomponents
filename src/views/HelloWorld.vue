<template>
    <div class="hello">
        当前登录信息： <br>
        {{token}}
        {{name}}
        {{phone}}
        {{role}}
        {{gender}}
        <router-link to="/sectiona">日历组件</router-link>
    </div>
</template>

<script type="text/ecmascript-6">
    import { mapGetters } from 'vuex'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                marks:['2018-01-12']
            }
        },
        methods: {

        },
        computed: {
            ...mapGetters(['token', 'role', 'phone', 'gender', 'avatar', 'name'])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1{
        text-align: center;
        padding: 10px;
    }
</style>
