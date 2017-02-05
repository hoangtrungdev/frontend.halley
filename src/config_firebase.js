/**
 * Created by trungdev on 05/02/2017.
 */
import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'
Vue.use(VueFire)
const configFirebase = {
  apiKey: 'AIzaSyDGUYSLmWfXhgV5xS1wXx9oc--REhbRJfg',
  authDomain: 'halley-hoangtrungdev.firebaseapp.com',
  databaseURL: 'https://halley-hoangtrungdev.firebaseio.com',
  storageBucket: 'halley-hoangtrungdev.appspot.com',
  messagingSenderId: '716358595273'
}
const firebaseApp = Firebase.initializeApp(configFirebase)
const dbFirebase = firebaseApp.database()

export default dbFirebase
