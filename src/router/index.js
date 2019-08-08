import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Header from '@/pages/home/components/Header.vue'
import Swiper from '@/pages/home/components/Swiper.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Swiper',
      name: 'Swiper',
      component: Swiper
    }
  ]
})
