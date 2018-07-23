import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BookDetail from '@/components/BookDetail'
import NotFound from '@/components/NotFound'
import Users from '@/pages/Users'
import User from '@/pages/User'
import AddBook from '@/pages/AddBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/book/:id',
      name: 'BookDetail',
      component: BookDetail,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: User,
      props: true
    },
    {
      path: '/addbook',
      name: 'AddBook',
      component: AddBook
    }
  ],
  mode: 'history'
})
