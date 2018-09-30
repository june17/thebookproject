import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/store'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_ID
}
firebase.initializeApp(config);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
