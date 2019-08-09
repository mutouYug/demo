<template>
    <swiper>
        <swiper-slide v-for="(pages, index) of pages" :key="index">
            <div class="Icons-menu">
                <div v-for="item in pages" :key="item.id" class="Icons" >
                    <img :src="item.imgUrl" class="Icons-img">
                    <span v-text="item.title" class="Icons-desc"></span>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>

export default {
  name: 'Home',
  data () {
      return {
        list: [
            {
                id: 1,
                imgUrl: require('@/assets/images/ticket.png'),
                title: '景点门票',
                url: ''
            },
             {
                id: 2,
                imgUrl: require('@/assets/images/visit.png'),
                title: '深圳必游',
                url: ''
            },
             {
                id: 3,
                imgUrl: require('@/assets/images/summerShow.png'),
                title: '暑期夜场',
                url: ''
            },
             {
                id: 4,
                imgUrl: require('@/assets/images/aquarium.png'),
                title: '海洋馆',
                url: ''
            },
             {
                id: 5,
                imgUrl: require('@/assets/images/one-day tour.png'),
                title: '一日游',
                url: ''
            },
             {
                id: 6,
                imgUrl: require('@/assets/images/zoo.png'),
                title: '深圳动物园',
                url: ''
            },
             {
                id: 7,
                imgUrl: require('@/assets/images/window-on -world.png'),
                title: '世界之窗',
                url: ''
            },
             {
                id: 8,
                imgUrl: require('@/assets/images/overseas -chinese -city.png'),
                title: '东部华侨城',
                url: ''
            },
             {
                id: 9,
                imgUrl: require('@/assets/images/playa-maya waterPark.png'),
                title: '玛雅水公园',
                url: ''
            },
             {
                id: 10,
                imgUrl: require('@/assets/images/chimelong.png'),
                title: '玩转长隆',
                url: ''
            }
        ]
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
