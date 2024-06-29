import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createBootstrap } from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { initializeApp } from 'firebase/app'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const firebaseConfig = {
    apiKey: "AIzaSyAW5qQHo8QmatE9BcsLOrpM2HoJPYbkw-o",
    authDomain: "mbuku-bookstore.firebaseapp.com",
    projectId: "mbuku-bookstore",
    storageBucket: "mbuku-bookstore.appspot.com",
    messagingSenderId: "212911618344",
    appId: "1:212911618344:web:5b27763828b9cf6ba0381d",
    measurementId: "G-5YHRCLC9GT"
  };
  initializeApp(firebaseConfig)

/* add icons to the library */
library.add(faTwitter, faFacebook, faInstagram, faLinkedin)

app.use(createPinia())
app.use(router)
app.use(createBootstrap())
app.component('font-awesome-icon', FontAwesomeIcon)
// app.use(BootstrapVue, IconsPlugin)

app.mount('#app')
