<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="请输入城市名或者拼音" />
    </div>
</template>
<script>
export default {
    name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
    height: .72rem
    background : $bgColor
    padding : 0 .1rem
.search-input
    width 97.5%
    height : .62rem
    line-height .62rem
    color : #666
    text-align center
    border-radius .06rem
    padding : 0 .1rem
    border-box-sizing border-box
</style>
