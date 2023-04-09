import { createApp } from 'vue'
import App from './App.vue'
import emui from '@emui/components'
const app = createApp(App)
app.use(emui)
app.mount('#app')
