import type { Preview } from '@storybook/vue3-vite'
import { setup } from '@storybook/vue3-vite'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import '../src/index.css'
import 'primeicons/primeicons.css'
import router from '../src/router'
import DialogService from 'primevue/dialogservice'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { withThemeByClassName } from '@storybook/addon-themes'

setup((app) => {
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
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  tags: ['autodocs'],
}

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
]

export default preview
