import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
// import Header from '@/pages/home/components/Header.vue'
import Swiper from '@/pages/home/components/Swiper.vue'
import City from '@/pages/city/City.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/Swiper',
      name: 'Swiper',
      component: Swiper
    }
  ]
})
