import { createApp } from 'vue'
import router from "../front/router"
import App from './app-back.vue'
import '../scss/back.scss'
import 'bootstrap'
import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app
    .use(pinia)
    .use(router)
    .use(VueAxios, axios)
    .provide('axios', app.config.globalProperties.axios)
    .mount('#app')


