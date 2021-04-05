import VueRouter from 'vue-router';

const Child = () => import(/* webpackChunkName: "Child" */ '@/pages/Child');

const router = new VueRouter({
  routes: [
    {
      path: '/subapp/x/y',
      name: 'Child',
      component: Child,
      meta: {
        needAuthenticate: false
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Child' && to.meta.needAuthenticate && !localStorage.getItem('token')) {
    next({
      name: 'Child',
      query: {redirect: to.fullPath}
    });
  } else {
    next();
  }
});

export default router;
