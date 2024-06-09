import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createBootstrap } from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
// import { BootstrapVueIcons } from 'bootstrap-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

const app = createApp(App)

/* add icons to the library */
library.add(faTwitter, faFacebook, faInstagram, faLinkedin)

app.use(createPinia())
app.use(router)
app.use(createBootstrap())
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(BootstrapVue, IconsPlugin)

app.mount('#app')
