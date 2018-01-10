<template>
    <div class="hello">
        <calender
          :marks.sync="markDays"
          v-on:getPre="getPre"
          v-on:getNext="getNext"
        ></calender>
    </div>
</template>

<script type="text/ecmascript-6">
    import sectionb from '@/components/sectionb'
    import calender from '@/components/Calender'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                markDays:[],
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods:{
            getPre(){
                setTimeout(()=>{
                    this.markDays.push('2017-12-20')
                },1000)
            },
            getNext(){
                setTimeout(()=>{
                    this.markDays.push('2018-02-09')
                },1000)
            }
        },
        components:{
            calender
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
