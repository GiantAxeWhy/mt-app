import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankpage from '@/layout/blank.vue'
import index from '@/page/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [{
        path: '/index',
        name: 'index',
        component: index
      }]
    }, {
      path: '/blank',
      name: 'blankpage',
      component: blankpage
    }
  ]
})
