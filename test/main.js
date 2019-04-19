import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import Sukeos from '../index.js'
import '../less/index'

Vue.use(Router)
Vue.use(Sukeos)

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('./home')
    }
  ]
})

const app = new Vue({
	el:'#app',
	router,
  template: '<App/>',
  components: { App },
})
