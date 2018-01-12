<template>
    <div class="hello">
        {{token}}
        {{name}}
        {{phone}}
        {{role}}
        {{gender}}
        <img v-bind:src="avatar" alt="">
        <button @click="fetchList()">发送</button>
        <div>
            <calender
                :marks="marks"
            ></calender>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { mapGetters } from 'vuex'
    import calender from  '@/components/Calender'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                marks:['2018-01-12']
            }
        },
        methods: {
            fetchList(){
                this.$store.dispatch('LoginIn', {
                    name: "小王"
                })
            }
        },
        computed: {
            ...mapGetters(['token', 'role', 'phone', 'gender', 'avatar', 'name'])
        },
        components:{
            calender
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
