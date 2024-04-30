import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import './index.css'
import store from './store/index.js'
import BaseButton from './components/ui/BaseButton.vue'
import BaseCard from './components/ui/BaseCard.vue'
import BaseSpinner from './components/ui/BaseSpinner.vue'

const app = createApp(App)

app.component('base-button', BaseButton)
app.component('base-card', BaseCard)
app.component('base-spinner', BaseSpinner)

app.use(router)
app.use(store)
app.mount('#app')
