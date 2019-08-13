<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list
            :hot="hotCities"
            :cities="cities"
            :letter="letter"
            ></city-list>
        <city-alphabet
            :cities="cities"
            @change="handleChange"
            >
            </city-alphabet>
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
              hotCities: [],
              cities: {},
              letter: ''
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
                this.hotCities = data.hotCities
                this.cities = data.cities
            }
        },
        handleChange (letter) {
            this.letter = letter
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>
<style lang="stylus" scoped>
</style>
