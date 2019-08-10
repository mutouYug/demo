<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of weekendList" :key="item">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Weekend',
    data () {
        return {
            weekendList: [
                {
                    imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
                    title: '大连圣亚海洋世界',
                    desc: '浪漫大连首站，浪漫的海洋主题乐园'
                },
                {
                    imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
                    title: '大连圣亚海洋世界',
                    desc: '浪漫大连首站，浪漫的海洋主题乐园'
                },
                {
                    imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
                    title: '大连圣亚海洋世界',
                    desc: '浪漫大连首站，浪漫的海洋主题乐园'
                },
                {
                    imgUrl: 'https://imgs.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
                    title: '大连圣亚海洋世界',
                    desc: '浪漫大连首站，浪漫的海洋主题乐园'
                }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl';
.title
    line-height : .8rem
    margin-top : .25rem
    text-indent : .2rem
    background : #eee
  .item-img
     width : 100%
   .item-info
       padding : .1rem
    .item-title
        line-height : .54rem
        font-size : .32rem
        ellipsis()
    .item-desc
        line-height : .4rem
        color : #ccc
        ellipsis()
    .item-img-wrapper
        overflow: hidden
        height : 0
        padding-bottom : 33.9%
</style>
