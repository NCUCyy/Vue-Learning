import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入store(index.js默认，可以省略)
import store from './store/index.js'

new Vue({
  render: h => h(App),
  beforeCreate() {
    // 设置全局事件总线
    Vue.prototype.$bus = this
  },
  store
}).$mount('#app')
