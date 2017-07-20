import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Auth from '@/components/Auth'
import AddArticle from '@/components/AddArticle'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/:id',
          component: Detail,
          props: true
        }
      ]
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/add_article',
      name: 'AddArticle',
      component: AddArticle
    }
  ]
})
