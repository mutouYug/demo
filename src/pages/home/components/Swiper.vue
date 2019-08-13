<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide of list" :key="slide.id">
        <img class="swiper-img" :src="slide.imgUrl">
        </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'Swiper',
    props: {
      list: Array
    },
    components: {
        swiper,
        swiperSlide
    },
     data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          clickable: true,
          autoplay: true,
          loop: true,
          speed: 1000
        }
      }
    }
}
</script>
<style lang = "stylus" scoped>
    .swiper-img
        width : 100%
</style>
