import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import firebase from 'firebase/app';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/markupBalloon',
      name: 'markupBalloon',
      component: () => import('./components/MarkupBalloon.vue')
    },
    {
      path: '/vcCalendar',
      name: 'vcCalendar',
      component: () => import('./components/VcCalendar.vue')
    },
    {
      path: '/twitterLogin',
      name: 'twitterLogin',
      component: () => import('./components/TwitterLogin.vue'),
      beforeEnter: (to, from, next) => {
        const currentUser = firebase.auth().currentUser;
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        console.log(to)
        console.log('currentUser');
        console.log(currentUser);
        console.log('requiresAuth');
        console.log(requiresAuth);
        if (!currentUser) {
          console.log('cccc')
          next();
        } else {
          next('/twitterHome');
        }
      }
    },
    {
      path: '/twitterHome',
      name: 'twitterHome',
      component: () => import('./components/TwitterHome.vue'),
      meta: {
        requiresAuth: true
      },
      beforeEnter: (to, from, next) => {
        const currentUser = firebase.auth().currentUser;
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        console.log(to)
        console.log('currentUser');
        console.log(currentUser);
        console.log('requiresAuth');
        console.log(requiresAuth);
        if (!currentUser) {
          console.log('dddd')
          next('/twitterLogin');
        }else{
          next();
        }
      }
    },
  ]
})
export default router
