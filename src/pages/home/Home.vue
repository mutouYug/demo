<template>
<div>
  <Header></Header>
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
import { mapState } from 'vuex'
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
      lastCity: '',
      swiperList: [],
      recommendList: [],
      iconsList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.recommendList = data.recommendList
        this.iconsList = data.iconsList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
