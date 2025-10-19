import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/index.js'

import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
