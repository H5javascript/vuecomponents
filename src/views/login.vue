<template>
    <div class="hello">
        这里是登录的页面  你点一下 就登录了
        <button @click="fetchList()">发送</button>
    </div>
</template>

<script type="text/ecmascript-6">
    import { mapGetters } from 'vuex'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: ''
            }
        },
        methods: {
            fetchList(){
                this.$store.dispatch('LoginIn', {
                    name: "admin",
                    password:'admin'
                }).then(()=>{
                    this.$router.push({ path: '/' })
                }).catch(error=>{
                    console.log('登录失败')
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
