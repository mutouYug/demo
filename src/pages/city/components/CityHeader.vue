<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont back-home">&#xe624;</div>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
    position: relative
    overflow: hidden
    height: .86rem
    text-align : center
    line-height : .86rem
    color: #fff
    font-size : .32rem
    background : $bgColor
.back-home
    position: absolute
    width : .64rem
    text-align : center
    font-size : .4rem
    top : 0
    left : 0
    color : #fff
</style>
