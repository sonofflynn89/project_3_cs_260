import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Standings from '@/components/Standings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
      
    {
	path: '/standings',
	name: 'Standings',
	component: Standings
    }
  ]
})
