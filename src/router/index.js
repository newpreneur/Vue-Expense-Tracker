import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/components/auth'
import dashboard from '@/components/dashboard'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'auth',
      component: auth
    },
    {
      path: '/auth',
      name: 'auth',
      component: auth
    },
    {
      path: '/dashboard/:user',
      name: 'dashboard',
      component: dashboard,
      
    },
  ]
})
