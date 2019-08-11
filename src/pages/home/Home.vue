<template>
<div>
  <Header :city="city"></Header>
  <Swiper :list="swiperList"></Swiper>
  <Icons :list="iconsList"></Icons>
  <Recommend :list="recommendList"></Recommend>
  <Weekend :list="weekendList"></Weekend>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Swiper from './components/Swiper.vue'
import Icons from './components/Icons.vue'
import Recommend from './components/Recommend.vue'
import Weekend from './components/Weekend.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
    Weekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      recommendList: [],
      iconsList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/static/mock/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.recommendList = data.recommendList
        this.iconsList = data.iconsList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
