<template>
    <div id="draw">
        1
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: '',
        methods:{

        },
        created(){
            this.$nextTick(()=>{
               let drawMp =  document.getElementById('draw');
                drawMp.onclick = ()=>{
                    drawMp.className?drawMp.className="":drawMp.className = 'rate';
                }
            })
        }
    }
</script>

<style>
    #draw{
        width: 100px;
        height: 100px;
        background-color: aqua;
        text-align: center;
        line-height: 100px;
    }
    .rate{
        animation:roll 1s linear;
    }
    @keyframes roll {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
</style>
