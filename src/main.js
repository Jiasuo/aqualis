import { createApp } from 'vue'
import App from './App.vue'

// Router
import router from "./router"

createApp(App)
.use(router)
.mount('#app')
