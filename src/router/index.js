import Vue from 'vue'
import Router from 'vue-router'
const Login = resolve => require(['../components/Login'], resolve)
const Index = resolve => require(['../components/Index'], resolve)
const Setting = resolve => require(['../components/Setting'], resolve)
const MyOrder = resolve => require(['../components/MyOrder'], resolve)
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '用户登录'
      }
    },
    {
      path: '/set',
      name: 'Setting',
      component: Setting,
      meta: {
        title: '用户设置'
      }
    },
    {
      path: '/myorder',
      name: '我的订单',
      component: MyOrder,
      meta: {
        title: '我的订单'
      }
    },
    {
      path: '*',
      name: 'index',
      component: Index
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router

