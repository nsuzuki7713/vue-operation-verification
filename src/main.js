import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCalendar from 'v-calendar'

Vue.config.productionTip = false

const firebase = require('firebase/app');
var firebaseConfig = {
  apiKey: process.env.VUE_APP_API_API_KEY,
  authDomain: process.env.VUE_APP_API_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_API_DATABASE_URL,
  projectId: process.env.VUE_APP_API_PROJECT_ID,
  storageBucket: process.env.VUE_APP_API_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_API_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_API_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// https://stackoverflow.com/questions/43648240/firebase-auth-and-vue-router/49302592#49302592
let app;
firebase.auth().onAuthStateChanged(async user => {
  console.log(user);
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