<template>
    <div class="calender">
        <div class="c_header">
            <span @click="pre()"> < </span>
            <div>
                {{year}}-{{month}}
            </div>
            <span @click="next()"> > </span>
        </div>
        <ul class="week">
            <li>周日</li>
            <li>周一</li>
            <li>周二</li>
            <li>周三</li>
            <li>周四</li>
            <li>周五</li>
            <li>周六</li>
        </ul>
        <ul class="days">
            <li v-for="item in beforeDays" class="gary">
                {{item.day}}
            </li>
            <li v-for="item in nowDays" :class="{'mark':isMark(item)}">
                <span>{{item.day}}</span>
                <span v-if="isMark(item)">已签到</span>
            </li>
            <li v-for="item in afterDays" class="gary">
                {{item.day}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: '',
        data(){
            return {
                day: '',
                year: '',
                month: '',
                beforeDays: [],
                nowDays: [],
                afterDays: [],
                now:new Date()
            }
        },
        props: {
            marks:{
                type:Array,
                default:[]
            }
        },

        created: function () {  //在vue初始化时调用
            //渲染当前时间
            this.init();
        },
        methods: {
            init(){
                this.year =  this.now.getFullYear();
                this.month =  this.now.getMonth() + 1 >= 10 ?  this.now.getMonth() + 1 : `0${ this.now.getMonth() + 1}`;
                this.day =  this.now.getDate() >= 10 ?  this.now.getDate() : `0${ this.now.getDate()}`
                //绘制日历
                this.drawDays()
            },
            drawDays(){
                let year = this.year;
                let month = this.month;
                // 计算本月1号是周几；
                var week = new Date(year + '-' + month + '-1').getDay();
                // 计算本月有多少天；
                var days = new Date(year, month, 0).getDate();
                // 计算上月有多少天；
                var dayw = new Date(year, month - 1, 0).getDate();
                // 拿三个数组装渲染数据
                let beforeDays=[];
                let nowDays=[];
                let afterDays=[];
                for (let i = 1; i <= days; i++) {
                    nowDays.push({
                        date: `${year}-${month}-${i >= 10 ? i : '0' + i}`,
                        day: i
                    })
                }
                for (var j = dayw - week + 1; j <= dayw; j++) {
                    beforeDays.push({
                        day: j
                    })
                }
                // 计算后面空格键；
                for (var x = 1; x < 43 - days - week; x++) {
                    afterDays.push({
                        day: x
                    })
                }
                this.nowDays = nowDays;
                this.beforeDays = beforeDays;
                this.afterDays = afterDays;
            },
            isMark(item){
                let markDay = item.date;
                return this.marks.indexOf(markDay) >= 0
            },
            pre(){
                var y = this.now.getFullYear();
                var m = this.now.getMonth()+1;
                if (m == 1) {
                    y--;
                    m = 12;
                } else {
                    m--;
                }
                this.$emit('getPre',this.now);
                this.now = new Date(y, m,'');
                this.init();
            },
            next(){
                var y = this.now.getFullYear();
                var m = this.now.getMonth()+1;
                if (m == 12) {
                    y++;
                    m = 1;
                } else {
                    m++;
                }
                this.now = new Date(y, m,'');
                this.$emit('getNext',this.now);
                this.init()
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    .calender {
        width: 100%;
        background-color: #ffffff;
    }

    .c_header {
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        line-height: 40px;
    }

    .week {
        display: flex;
        list-style: none;
        width: 100%;
        background-color: #4982fe;
        color: #fff;
    }

    ul li {
        width: 14.2857%;
        text-align: center;
        line-height: 40px;
        height: 40px;
    }

    .gary {
        color: #dddddd;
    }

    ul.days {
        display: flex;
        list-style: none;
        width: 100%;
        flex-flow: wrap;
    }

    .mark {
        background-color: #e4393c;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .mark span{
        font-size: 12px;
        line-height: 14px;
    }
</style>
