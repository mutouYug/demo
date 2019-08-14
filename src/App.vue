<template>
  <div id="app">
    <!-- exclude="Detail" -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang = "stylus" scoped>
  * {
    margin : 0
    padding : 0
    border : 0
  }
</style>
