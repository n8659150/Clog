import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/Index/template'
import login from '@/pages/Login/template'
import create from '@/pages/Create/template'
import detail from '@/pages/Detail/template'
import edit from '@/pages/Edit/template'
import my from '@/pages/My/template'
import register from '@/pages/Register/template'
import user from '@/pages/User/template'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/login',
      // name: 'HelloWorld',
      component: login
    },
    {
      path: '/create',
      // name: 'HelloWorld',
      component: create
    },
    {
      path: '/detail',
      // name: 'HelloWorld',
      component: detail
    },
    {
      path: '/edit',
      // name: 'HelloWorld',
      component: edit
    },
    {
      path: '/my',
      // name: 'HelloWorld',
      component: my
    },
    {
      path: '/register',
      // name: 'HelloWorld',
      component: register
    },
    {
      path: '/user',
      // name: 'HelloWorld',
      component: user
    }
  ]
})
