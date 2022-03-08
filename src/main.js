import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueParticles from 'vue-particles'
import '@/styles/index.less'
import '@/styles/normolize.less'
import dataV from '@jiaminghi/data-view'
import * as echarts from 'echarts'

Vue.use(dataV)
Vue.use(VueParticles)

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/'
Vue.prototype.$http = axios
// 挂载echarts
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
