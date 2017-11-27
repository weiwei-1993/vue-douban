import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Mine from '@/components/mine'
import Detail from '@/components/detail'
import Collect from '@/components/collect'
import Login from '@/components/login'

// import LoadMore from '@/components/load-more'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/collect',
      name: 'collect',
      component: Collect
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
