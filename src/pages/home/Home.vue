<template>
<div>
  <Header></Header>
  <Swiper></Swiper>
  <Icons></Icons>
  <Recommend></Recommend>
  <Weekend></Weekend>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Swiper from './components/Swiper.vue'
import Icons from './components/Icons.vue'
import Recommend from './components/Recommend.vue'
import Weekend from './components/Weekend.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
    Weekend
  }
}
</script>

<style lang="stylus" scoped>
</style>
