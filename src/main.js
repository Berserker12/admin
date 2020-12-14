import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import  '../vue.config.js';


Vue.config.productionTip = false;


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios'
Vue.prototype.$axios = axios



axios.interceptors.request.use(config => {

  // config.headers.Authorization = sessionStorage.getItem("token")
  config.headers.common['token'] = sessionStorage.getItem('token');

  return config
})

router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem("token")
  console.log(token)
  if (to.path == '/') {
    if (token) {
      return next('/home')
    }
    if (to.path == '/home') {
      if (!token) {
        return next('/')
      }
    }
  }
  return next()
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
