<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :city="city" :hot="hotCities" :cities="cities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>
<script>
import CityHeader from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
import CityList from './components/CityList.vue'
import CityAlphabet from './components/CityAlphabet.vue'
import axios from 'axios'
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data () {
        return {
              city: '',
              hotCities: [],
              cities: {}
        }
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json')
            .then(this.getCityInfoSucc)
        },
        getCityInfoSucc (res) {
            console.log(res)
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.city = data.city
                this.hotCities = data.hotCities
                this.cities = data.cities
            }
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>
<style lang="stylus" scoped>
</style>
