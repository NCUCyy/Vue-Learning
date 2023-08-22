import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: h => h(App),
  beforeCreate() {
    // 安装全局总线，this就是vm
    Vue.prototype.$bus = this
  },
})
