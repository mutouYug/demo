let defaultCity = '北京'
try {
    localStorage.city = defaultCity
} catch (e) {}
export default {
    city: defaultCity
}
