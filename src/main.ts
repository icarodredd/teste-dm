import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import Aura from '@primeuix/themes/aura'
import './index.css'
import 'primeicons/primeicons.css'
import router from './router'
import DialogService from 'primevue/dialogservice'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.dark',
    },
  },
})

app.use(VueQueryPlugin)

app.use(router)

app.use(DialogService)

app.mount('#app')
