import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入我们的组件库
import NlrxUI from './packages'
Vue.use(NlrxUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
