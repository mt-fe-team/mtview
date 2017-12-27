import Vue from 'vue'
import Router from 'vue-router'
import Select from '../router/select'
import Affix from '../router/affix'
import None from '../router/none'
import Group from '../router/group'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/affix',
      name: 'Affix',
      component: Affix
    },
    {
      path: '/none',
      name: 'None',
      component: None
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    }
  ]
})
