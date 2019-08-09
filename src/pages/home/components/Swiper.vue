<template>
    <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img class="swiper-img" :src="slide.imgUrl">
        </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'Swiper',
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
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev'
        // }
    },
        swiperSlides: [
            {imgUrl: require('@/assets/images/1.jpg')},
            {imgUrl: require('@/assets/images/2.jpg')},
            {imgUrl: require('@/assets/images/3.jpg')},
            {imgUrl: require('@/assets/images/3.jpg')},
            {imgUrl: require('@/assets/images/3.jpg')}
        ]
      }
    },
    mounted () {
      setInterval(() => {
        if (this.swiperSlides.length < 5) {
          this.swiperSlides.push(this.swiperSlides.length + 1)
        }
      }, 3000)
    }
}
</script>
<style lang = "stylus" scoped>
    .swiper-img
        width : 100%
</style>
