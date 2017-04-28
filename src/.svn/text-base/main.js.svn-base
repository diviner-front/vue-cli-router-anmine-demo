// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookie from 'vue-cookie'
import ViewSwitcher from './services/ViewSwitcher'

let routeRection = new Vue()
Vue.config.productionTip = false

export default ViewSwitcher.use([VueCookie, ViewSwitcher])
export const toRouter = () => {
  if (routeRection.direction === 'forward') {
    return 'slide-right'
  } else {
    return 'slide-left'
  }
}

router.beforeEach((to, from, next) => {
  // console.log(to.path, from.path, to.meta.title, to.name, from.name)
  setTimeout(() => {
    let transitions = !from.name ? 'slide-side' : toRouter()
    router.app.transition = transitions
    next()
    Vue.prototype.direction = 'forward'
  }, 0)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
