<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="(pages, index) of pages" :key="index">
            <div class="Icons-menu">
                <div v-for="item in pages" :key="item.id" class="Icons" >
                    <img :src="item.imgUrl" class="Icons-img">
                    <span v-text="item.title" class="Icons-desc"></span>
                </div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>

export default {
  name: 'Home',
  props: {
      list: Array
  },
  data () {
      return {
         swiperOption: {
          pagination: '.swiper-pagination'
         }
      }
    },
    computed: {
        pages () {
            const pages = []
            this.list.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .Icons-menu
        width : 100%
    .icons-pagination
        margin-top : 3rem
    .Icons
        width : 25%
        height : 25%
        float: left
        margin : 0 auto
        padding-top : .2rem
        text-align : center
    .Icons-img
        width : 1rem
        height : 1rem
    .Icons-desc
        width : 1.4rem
        float : left
        padding-left : .2rem
        padding-top : .1rem
        color : $darkTextColor
        overflow : hidden
        white-space : nowrap
        text-overflow : list-separator
</style>
