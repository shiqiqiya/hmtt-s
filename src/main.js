import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.less'
// import 'vant/lib/index.css'
import 'amfe-flexible'
// import '@/styles/icon.less'
// import '@/styles/reset.less'
import '@/styles/index.less'
import MyIcon from '@/components/MyIcon'
import * as obj from '@/filters/index'
// 全局组件component 代表挂在到全局对象身上
Vue.component('MyIcon', MyIcon)

Vue.use(Vant)

Vue.config.productionTip = false

Object.keys(obj).forEach(key => {
  Vue.filter(key, obj[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
