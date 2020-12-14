import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);



const routes = [

  {
    path: "/",
    name: "index",
    component: () => import("../components/index.vue")
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/home.vue'),
    children: [
      {
        path: '/menu/home',
        name: 'menu_home',
        component: () => import('../components/menu/home.vue'),
        children: [
          {
            path: '/menus/home',
            name: 'menus_home',
            component: () => import('../components/menus/home.vue')
          },
          {
            path: '/menus/img',
            name: 'menus_img',
            component: () => import('../components/menus/image.vue')
          },
          {
            path: '/menus/goods',
            name: 'menus_goods',
            component: () => import('../components/menus/goods.vue')
          }
        ]
      },
      {
        path: '/menu/goods',
        name: 'menu_goods',
        component: () => import('../components/menu/goods.vue')
      },
      {
        path: '/menu/order',
        name: 'order',
        component: () => import('../components/menu/order.vue')
      },
      {
        path: '/menu/vip',
        name: 'vip',
        component: () => import('../components/menu/vip.vue')
      },
      {
        path: '/menu/setting',
        name: 'menu_setting',
        component: () => import('../components/menu/setting.vue')
      },
    ]
  }

];





const router = new VueRouter({
  routes
});

export default router;
