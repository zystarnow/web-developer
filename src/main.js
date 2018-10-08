
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/less/common.less'
// import hljs from 'highlight.js'
// import 'highlight.js/styles/googlecode.css'
// Vue.directive('highlight', function (el) {
//   let blocks = el.querySelectorAll('pre code')
//   blocks.forEach((block) => {
//     hljs.highlightBlock(block)
//   })
// })

Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: 'small'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
