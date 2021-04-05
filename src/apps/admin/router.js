import VueRouter from 'vue-router';

const Login = () => import(/* webpackChunkName: "Login" */ '@/pages/Login');
const Main = () => import(/* webpackChunkName: "Main" */ '@/pages/Main');
const Other = () => import(/* webpackChunkName: "Other" */ '@/pages/Other');
const SubAPP = () => import(/* webpackChunkName: "SubAPP" */ '@/pages/SubAPP');

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        needAuthenticate: false
      }
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      meta: {
        needAuthenticate: true
      }
    },
    {
      path: '/other',
      name: 'Other',
      component: Other,
      meta: {
        needAuthenticate: false
      }
    },
    {
      path: '/subapp/:appid/:appname',
      name: 'SubAPP',
      component: SubAPP,
      meta: {
        needAuthenticate: false
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && to.meta.needAuthenticate && !localStorage.getItem('token')) {
    next({
      name: 'Login',
      query: {redirect: to.fullPath}
    });
  } else {
    next();
  }
});

export default router;
