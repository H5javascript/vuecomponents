<template>
    <div class="hello">
        {{token}}
        {{name}}
        {{phone}}
        {{role}}
        {{gender}}
        这里是登录的页面  你点一下 就登录了
        <img v-bind:src="avatar" alt="">
        <button @click="fetchList()">发送</button>
    </div>
</template>

<script type="text/ecmascript-6">
    import { mapGetters } from 'vuex'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            fetchList(){
                this.$store.dispatch('LoginIn', {
                    name: "小王"
                }).then(()=>{
                    this.$router.push({ path: '/' })
                })
            }
        },
        computed: {
            ...mapGetters(['token', 'role', 'phone', 'gender', 'avatar', 'name'])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
