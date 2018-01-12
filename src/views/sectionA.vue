<template>
    <div class="hello">
        {{token}}
        {{name}}
        {{phone}}
        {{role}}
        {{gender}}
        <img v-bind:src="avatar" alt="">

        <button @click="loginout()">登出</button>
    </div>
</template>

<script type="text/ecmascript-6">
    import { mapGetters } from 'vuex'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                marks: ['2018-01-12']
            }
        },
        methods: {
            loginout(){
                this.$store.dispatch('loginOut').then(()=>{
                    this.$router.push({path:'/login'});
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
