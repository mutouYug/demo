<template>
  <div id="header">
    <div class="headerLeft">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="headerInput">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="headerRight">
          {{this.city}}
        <span class="iconfont">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  #header
    display : flex
    line-height : .86rem
    background : $bgColor
    color : #fff
  .headerInput
    flex : 1
    height : .64rem
    line-height : .64rem
    margin-top : .12rem
    margin-left : .2rem
    background : #fff
    color : #ccc
    border-radius : .1rem
    padding-left : .2rem
  .headerLeft
    width : .64rem
    float : left
    .back-icon
      text-align : center
      font-size : .4rem
  .headerRight
    min-width : 1.04rem
    padding : 0 .1rem
    float : right
    text-align : center
    color : #fff
</style>
