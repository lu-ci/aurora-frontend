import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/pages/Landing'
import Sigma from '@/pages/Sigma'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/sigma',
      name: 'Sigma',
      component: Sigma
    }
  ]
})
