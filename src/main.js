// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.css'
import '@/assets/css/main.css'
import store from '@/package/store'
Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.directive('click-outside',{
  bind(el,binding,vnode){
    // console.log(el,binding);
    document.addEventListener('click', binding.value)
  },
  update(el,binding,vnode){
    document.addEventListener('click', binding.value)
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  mode:history,
  router,
  store,
  components: { App },
  template: '<App/>'
})
