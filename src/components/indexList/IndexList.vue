<template>
    <div class="index_list">
        <div class="index_content" ref="content">
            <slot></slot>
        </div>
        <div class="index_nav" @touchstart="handleTouchStart">
            <ul class="nav_bar">
                <li v-for="nav in sections" class="nav_bar_item">{{nav.key}}</li>
            </ul>
        </div>
        <div class="target_tip" v-show="targetTip">
            {{targetTip}}
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: '',
        data(){
            return {
                sections: [],
                firstSection:null,
                navOffsetX: 0,
                targetTip:"",
                indicatorTime:null
            }
        },
        methods: {
            handleTouchStart(e){
                let target = e.target;
                if(target.className!='nav_bar_item'){
                    return
                }
                this.movingList(e.changedTouches[0].clientY);
                this.navOffsetX = e.changedTouches[0].clientX;
                if (this.indicatorTime) {
                    clearTimeout(this.indicatorTime);
                }
                this.moving = true;
                window.addEventListener('touchmove', this.handleTouchMove);
                window.addEventListener('touchend', this.handleTouchEnd);
            },
            handleTouchMove(e) {
                this.movingList(e.changedTouches[0].clientY)
            },

            handleTouchEnd() {
                this.indicatorTime = setTimeout(() => {
                    this.targetTip = '';
                }, 500);
                window.removeEventListener('touchmove', this.handleTouchMove);
                window.removeEventListener('touchend', this.handleTouchEnd);
            },

            movingList(y){
                let currentItem = document.elementFromPoint(this.navOffsetX, y);
                let targets = this.sections.filter(section => section.key=== currentItem.innerText);
                let targetDOM;
                if (targets.length > 0) {
                    targetDOM = targets[0].el;
                    this.targetTip = targets[0]['key'];
                    this.$refs.content.scrollTop = targetDOM.getBoundingClientRect().top - this.firstSection.getBoundingClientRect().top; // 关键代码 折两个方法过去高度
                }
            },

            init(){
                this.$nextTick(()=> {
                    let nodeList = this.$refs.content.children
                    this.firstSection = nodeList[0];
                    for (let i = 0; i < nodeList.length; i++) {
                        this.sections.push({key:nodeList[i].querySelector('.head').innerHTML,el:nodeList[i]});
                    }
                })
            }
        },
        mounted(){
            this.init()
        }
    }
</script>

<style>
    /*@import "./indexList.css";*/
    .index_list {
        width: 100%;
        position: relative;
        background-color: #ffffff;
        height: 100%;
    }
    .index_list .index_content {
        position: absolute;
        left: 0;
        right: 30px;
        bottom: 0;
        top: 0;
        overflow: auto;
    }
    .index_list .index_content .content_item {
        margin-bottom: 10px;
    }
    .index_list .index_content .content_item .head {
        line-height: 30px;
        font-weight: bold;
        padding-left: 14px;
        background-color: #eeeeee;
    }
    .index_list .index_content .content_item .list {
        line-height: 40px;
        padding-left: 14px;
    }
    .index_list .index_content .content_item .list div {
        border-bottom: 1px solid #eeeeee;
    }
    .index_list .index_content .content_item .list div:last-child {
        border-bottom: none;
    }
    .index_list .index_nav {
        position: absolute;
        border-left: 1px solid #e8e8e8;
        text-align: center;
        top: 0;
        right: 0;
        bottom: 0;
        width: 30px;
    }
    .index_list .index_nav .nav_bar {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style: none;
    }
    .index_list .index_nav .nav_bar .nav_bar_item {
        padding: 5px 0;
    }
    .index_list .target_tip {
        width: 60px;
        height: 60px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -30px;
        margin-top: -30px;
        text-align: center;
        line-height: 60px;
        color: #ffffff;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.5);
    }
</style>
