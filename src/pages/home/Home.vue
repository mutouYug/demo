<template>
<div>
  <Header></Header>
  <Swiper></Swiper>
  <Icons></Icons>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Swiper from './components/Swiper.vue'
import Icons from './components/Icons.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Swiper,
    Icons
  }
}
</script>

<style lang="stylus" scoped>
</style>
