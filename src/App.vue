<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
    @import './styles/app/common.less';
    #app{
        height: 100%;
    }
</style>
