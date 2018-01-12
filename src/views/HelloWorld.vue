<template>
    <div class="hello">
        {{token}}
        {{name}}
        {{phone}}
        {{role}}
        {{gender}}
        <img v-bind:src="avatar" alt="">

        <router-link to="/sectiona">去a页面</router-link>
        <div>
            <calender
                :marks="marks"
            ></calender>
        </div>
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

</style>
