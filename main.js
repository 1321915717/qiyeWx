import Vue from 'vue'
import App from './App'
import store from './store'
import http from './utils/https.js'

import moment from './utils/moment.js'

Vue.filter('dateFormat', function (dateStr,pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dateStr).format(pattern);
})


Vue.prototype.request = http


Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
