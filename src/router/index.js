import Vue from 'vue'
import Router from 'vue-router'
import PageLanding from '@/pages/PageLanding'
import PageHome from '@/pages/PageHome'
import PageBookDetail from '@/pages/PageBookDetail'
import NotFound from '@/components/NotFound'
import Users from '@/pages/Users'
import PageUser from '@/pages/PageUser'
import PageAddBookManual from '@/pages/PageAddBookManual'
import PageAddBookIsbn from '@/pages/PageAddBookIsbn'
import PageRegister from '@/pages/PageRegister'
import PageSignIn from '@/pages/PageSignIn'
import store from '@/store/store'

Vue.use(Router)

const router =new Router({
      routes: [
        {
          path: '/',
          name: 'PageLanding',
          component: PageLanding,
          meta: {requiresGuest: true}
        },
        {
          path: '/home',
          name: 'PageHome',
          component: PageHome,
          meta: {requiresAuth: true}
        },
        {
          path: '/book/:id',
          name: 'PageBookDetail',
          component: PageBookDetail,
          props: true,
          meta: {requiresAuth: true}
        },
        {
          path: '/users',
          name: 'Users',
          component: Users,
          meta: {requiresAuth: true}
        },
        {
          path: '/user/:subId',
          name: 'PageUser',
          component: PageUser,
          props: true,
          meta: {requiresAuth: true}
        },
        {
          path: '/addbookm',
          name: 'PageAddBookManual',
          component: PageAddBookManual,
          meta: {requiresAuth: true}
        },
        {
          path: '/addbookisbn',
          name: 'PageAddBookIsbn',
          component: PageAddBookIsbn,
          meta: {requiresAuth: true}
        },
        {
          path: '/register',
          name: 'PageRegister',
          component: PageRegister,
          meta: {requiresGuest: true}
        },
        {
          path: '/signin',
          name: 'PageSignIn',
          component: PageSignIn,
          meta: {requiresGuest: true}
        }, 
        {
          path: '/logout',
          name: 'PageSignOut',
          meta: {requiresAuth: true},
          beforeEnter(to, from, next) {
            store.dispatch('signOut')
              .then(()=> next({name: 'Home'}))
          }
        },
        {
          path: '*',
          name: 'NotFound',
          component: NotFound,
          meta: {requiresGuest: true}
        }
      ],
      mode: 'history'
    })

router.beforeEach((to, from, next) => {
  console.log(`navigating to ${to.name} from ${from.name}`)
  store.dispatch('initAuthentication')
    .then(user => {
      if(to.matched.some(route => route.meta.requiresAuth)){ //it handle nested routes
        if(user) { //we cant call this.$store since the component is not created at this point
          next()
        } else {
          next({name: 'PageSignIn', query: {redirectTo: to.path}})
        }
      } else if(to.matched.some(route => route.meta.requiresGuest)){ //to signed in users from accessing signin and register page
        if(!user) { //we cant call this.$store since the component is not created at this point
          next()
        } else {
          next({name: 'Home'})
        }
      }else {
        next()
      }
  })
})

export default router
