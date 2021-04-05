import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

// 全局变量保存用户信息和公共索引数据
window.global = {
  indexes: {
  },
  userInfo: {
  }
};

// 随便读取，只能通过事件改变全局数据
window.addEventListener('changeGlobal', (e) => {
  setTimeout(() => {
    window.global = e.detail;
  }, 0);
});

// let e = new CustomEvent('changeGlobal', {
//   detail: {
//     indexes: {
//     },
//     userInfo: {
//     }
//   }
// });
// window.dispatchEvent(e);
