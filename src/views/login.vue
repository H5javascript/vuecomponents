<template>
    <div class="hello">
        这里提供两个角色  你可以试试
        <div>
            <label>
                <input type="radio" v-model="userInfo" name="role" v-bind:value="admin">
                admin
            </label>
            <label>
                <input type="radio" v-model="userInfo" name="role" v-bind:value="editor">
                editor
            </label>

        </div>

        <button @click="fetchList()">发送</button>
    </div>
</template>

<script type="text/ecmascript-6">
    import { mapGetters } from 'vuex'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: '',
                admin:{
                    name: "admin",
                    password:'admin'
                },
                editor:{
                    name: "editor",
                    password:'editor'
                },
                userInfo:{}
            }
        },
        methods: {
            fetchList(){
                this.$store.dispatch('LoginIn', this.userInfo).then(()=>{
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
