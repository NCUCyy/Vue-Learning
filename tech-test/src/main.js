import Vue from 'vue'
import App from './App.vue'

// ---------------------按需引入---------------------
// 按需引入组件
import { Button, Row, Input } from 'element-ui';
// 注册全局组件
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(Input.name, Input);

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
