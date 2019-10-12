import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/auth'
import Dashboard from '@/components/dashboard'
import Error from '@/components/error'

import FinancialHealth from '@/components/dashboard-components/option-components/fin-health';

import FinancialReports from '@/components/dashboard-components/option-components/fin-reports';

import FinancialTrajectory from '@/components/dashboard-components/option-components/fin-way';

import SmartBudget from '@/components/dashboard-components/option-components/fin-budget';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'auth',
      component: Auth
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/dashboard/:user',
      name: 'dashboard',
      component: Dashboard,
    },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'financialhealth',
          name: 'financialhealth',
          component: FinancialHealth
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'financialreports',
          name: 'financialreports',
          component: FinancialReports
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'smartbudget',
          name: 'smartbudget',
          component: SmartBudget
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'financialtrajectory',
          name: 'financialtrajectory',
          component: FinancialTrajectory
        }

  ,
    {
      path: '*',
      name: 'error',
      component: Error,

    },
  ]
})
