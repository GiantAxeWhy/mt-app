import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankpage from '@/layout/blank.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage
    } ,{
      path: '/blank',
      name: 'blankpage',
      component: blankpage
    }
  ]
})
