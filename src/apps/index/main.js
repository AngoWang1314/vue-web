import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import store from '../../stores/myvuex';

Vue.config.productionTip = false;

Vue.use(VueRouter);

let APP = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#appsub');

// 监听卸载事件
window.addEventListener('unmount', () => {
  console.log('unmount');

  APP.$destroy();
  document.querySelector('#appsub').innerHTML = '';
  window.removeEventListener('unmount');
});
