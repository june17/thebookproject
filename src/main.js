import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/store'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyCPCOE-2LaZIIjECELSqvnT9lENyD1eAZw",
  authDomain: "thebookproject-83223.firebaseapp.com",
  databaseURL: "https://thebookproject-83223.firebaseio.com",
  projectId: "thebookproject-83223",
  storageBucket: "thebookproject-83223.appspot.com",
  messagingSenderId: "602171685429"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
