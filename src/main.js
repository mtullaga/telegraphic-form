import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AxiosPlugin from 'vue-axios-cors';

Vue.use(AxiosPlugin)

Vue.mixin({
  data: function() {
    return {
      get getIpAddressServer() {
        return "https://mdtsecs.000webhostapp.com";       // Setting of IP Address for the Database
      }
    }
  }
})

Vue.config.productionTip = false

// const DEFAULT_TITLE = 'TELEGRAPHIC';
// router.afterEach((to) => {
//   // Use next tick to handle router history correctly
//   // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
//   Vue.nextTick(() => {
//       document.title = to.meta.title || DEFAULT_TITLE;
//   });
// });

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
