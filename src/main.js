import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCalendar from 'v-calendar'

Vue.config.productionTip = false

const firebase = require('firebase/app');
var firebaseConfig = {
  apiKey: "AIzaSyAXs5BJ8GwsRC7H5WOalcAnxgtHPtedOf4",
  authDomain: "twitter-login-a41d4.firebaseapp.com",
  databaseURL: "https://twitter-login-a41d4.firebaseio.com",
  projectId: "twitter-login-a41d4",
  storageBucket: "twitter-login-a41d4.appspot.com",
  messagingSenderId: "276368341966",
  appId: "1:276368341966:web:fdb2d282196b5eaa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// https://stackoverflow.com/questions/43648240/firebase-auth-and-vue-router/49302592#49302592
let app;
firebase.auth().onAuthStateChanged(async user => {
  if (!app) {
    // if (user) {
    //   await store.dispatch(AUTH_SUCCESS, utils.mapUser(user));
    // } else {
    //   await store.dispatch(AUTH_LOGOUT);
    // }
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
    
    Vue.use(VCalendar, {
      componentPrefix: 'vc',
    });
  }
});

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

// Vue.use(VCalendar, {
//   componentPrefix: 'vc',
// });