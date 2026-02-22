import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { router } from './router'
import { registerGlobalComponent } from './utils/import'

import './assets/styles/tailwind.css'
import './assets/styles/global.css'

const app = createApp(App)

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(router)
registerGlobalComponent(app)
app.mount('#app')
