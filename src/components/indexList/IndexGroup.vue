<template>
    <div class="content_item">
        <div class="head">{{index}}</div>
        <div class="list">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props:{
            index: {
                type: String,
                required: true
            }
        }
    }
</script>

<style>

</style>
