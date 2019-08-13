<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper"
                        v-for="item of hot"
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom"
                @change="handleAlphabet"
                >{{key}}</div>
                <div class="item-list"
                    v-for="inneritem of item"
                    :key="inneritem.id"
                >
                    <div
                        class="item border-topbottom"
                        @click="handleCityClick(inneritem.name)"
                    >{{inneritem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
    name: 'CityList',
    props: {
        hot: Array,
        cities: Object,
        letter: String
    },
    computed: {
    ...mapState({
        currentCity: 'city'
    })
  },
    methods: {
        handleAlphabet (msg) {
            console.log(msg)
        },
        handleCityClick (city) {
        // this.$store.dispatch('changeCity', city)
           this.changeCity(city)
           this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    watch: {
        letter () {
            if (this.letter) {
                const ele = this.$refs[this.letter][0]
                this.scroll.scrollToElement(ele)
            }
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
    &:bofore
        border-color: #ccc
    &:after
        border-color: #ccc
.list
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
.title
    line-height : .54rem
    background : #eee
    padding-left : .2rem
    color : #666
    font-size : .26rem
.button-list
    overflow : hidden
    padding : .1rem .6rem .1rem .1rem
.button-wrapper
    float : left
    width : 33.33%
.button
    margin : .1rem
    text-align : center
    border : .02rem solid #ccc
    padding .1rem 0
    border-radius .06rem
.item
    line-height : .76rem
    padding-left .2rem
</style>
