import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import Aura from '@primeuix/themes/aura'
import './index.css'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.use(VueQueryPlugin)

app.mount('#app')
