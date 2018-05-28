import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Place from '@/components/Place'
import Exhibitions from '@/components/Exhibitions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/place',
      name: 'Place',
      component: Place
    },
    {
      path: '/exhibitions',
      name: 'Exhibitions',
      component: Exhibitions
    }
  ]
})
