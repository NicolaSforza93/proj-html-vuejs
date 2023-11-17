import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faCartShopping, faMagnifyingGlass, faChevronRight, faChevronLeft, faCircle, faStar } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck, faCircle as faCircleRegular, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faXTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'


library.add(faFacebookF, faXTwitter, faInstagram, faYoutube, faChevronDown, faCartShopping, faMagnifyingGlass, faSquareCheck, faChevronRight, faChevronLeft, faCircle, faCircleRegular, faStar, faEnvelope)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

import "bootstrap/dist/js/bootstrap.js";