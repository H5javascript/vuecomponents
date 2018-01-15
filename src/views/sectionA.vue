<template>
    <div class="hello">
        <h1>日历组件</h1>
        <div>
            <calender
                    :marks="marks"
            ></calender>
        </div>
        <router-link to="/sectionb">index 组件</router-link>
    </div>
</template>

<script type="text/ecmascript-6">
    import { mapGetters } from 'vuex'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                marks: ['2018-01-12'],

                a:{
                    b:1,
                    c:[1,2,3]
                },

            }
        },
        methods: {
            loginout(){
                this.$store.dispatch('loginOut').then(()=>{
                    this.$router.push({path:'/login'});
                })
            },
            changeB(){
                this.a.b = '2'
            }
        },
        computed: {
            ...mapGetters(['token', 'role', 'phone', 'gender', 'avatar', 'name'])
        },
        watch:{
           'a':function(val){
               console.log(val);
           }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
