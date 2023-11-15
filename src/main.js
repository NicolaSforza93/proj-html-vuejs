import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faXTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'


library.add(faFacebookF, faXTwitter, faInstagram, faYoutube, faChevronDown, faCartShopping, faMagnifyingGlass)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

import "bootstrap/dist/js/bootstrap.js";