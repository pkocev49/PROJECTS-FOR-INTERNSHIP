import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from '@/Components/UI/BaseButton.vue'
import BaseCard from '@/Components/UI/BaseCard.vue'
import router from './router'

const app = createApp(App)
app.component('base-button', BaseButton)
app.component('base-card', BaseCard)

app.use(router)

app.mount('#app')
