import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import Aura from '@primeuix/themes/aura'
import './index.css'
import 'primeicons/primeicons.css'
import router from './router'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.use(VueQueryPlugin)

app.use(router)

app.mount('#app')
