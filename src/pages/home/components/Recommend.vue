<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item">
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Recommend',
    data () {
        return {
            recommendList: [
                {
                    imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
                    title: '大连圣亚海洋世界',
                    desc: '浪漫大连首站，浪漫的海洋主题乐园'
                },
                {
                    imgUrl: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
                    title: '故宫',
                    desc: '浪漫大连首站，浪漫的海洋主题乐园'
                },
                {
                    imgUrl: 'https://imgs.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_250x250_50c99cf3.jpg',
                    title: '八达岭长城',
                    desc: '浪漫大连首站，浪漫的海洋主题乐园'
                },
                {
                    imgUrl: 'https://imgs.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_250x250_63e3520a.jpg',
                    title: '圆明园',
                    desc: '浪漫大连首站，浪漫的海洋主题乐园'
                }
            ]}
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
 .item
    overflow : hidden
    display : flex
    height : 2rem
    padding-left : .1rem
  .item-img
     width : 1.7rem
     height : 1.7rem
     padding : .1rem
   .item-info
       flex : 1
       padding : .1rem
       min-width : 0
    .item-title
        line-height : .54rem
        font-size : .32rem
        ellipsis()
    .item-desc
        line-height : .4rem
        color : #ccc
        ellipsis()
    .item-button
        background : #ff9300
        margin-top : .16rem
        padding : .2rem
        border-radius : .06rem
        color : #fff
        line-height : .2rem
</style>
