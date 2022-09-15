import Vue from 'vue'
import Router from 'vue-router'

import NearBy from '@/components/NearBy'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NearBy',
      component: NearBy
    }
  ]
})
