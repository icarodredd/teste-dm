import AccountView from '@/views/account-view.vue'
import ChatsView from '@/views/chats-view.vue'
import PrivacyView from '@/views/privacy-view.vue'
import SettingsView from '@/views/settings-view.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/settings',
    },
    {
      path: '/settings',
      component: SettingsView,
    },
    {
      path: '/settings/account',
      component: AccountView,
    },
    {
      path: '/settings/privacy',
      component: PrivacyView,
    },
    {
      path: '/settings/chats',
      component: ChatsView,
    },
  ],
})

export default router
