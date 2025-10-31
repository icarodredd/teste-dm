<script setup lang="ts">
import DynamicDialog from 'primevue/dynamicdialog'
import { useDialog } from 'primevue/usedialog'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { Button } from 'primevue'
import { useRoute } from 'vue-router'
import SignOut from './components/sign-out.vue'
import { useQuery } from '@tanstack/vue-query'
import OptionMenu from './components/option-menu.vue'

export type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

async function fetchUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

const { data } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
})

const route = useRoute()
const dialog = useDialog()

const THEME_KEY = 'color-scheme'

const isDark = ref(false)
const isMdUp = ref(false)
const configurations = ref([
  {
    name: 'Conta',
    description: 'Notificações de segurança, informações da conta',
    icon: 'pi pi-key',
    href: '/settings/account',
  },
  {
    name: 'Privacidade',
    description: 'Contatos bloqueados, mensagens de visualização única',
    icon: 'pi pi-lock',
    href: '/settings/privacy',
  },
  {
    name: 'Conversas',
    description: 'Tema, verificação ortográfica e outras preferências',
    icon: 'pi pi-comment',
    href: '/settings/chats',
  },
])

const applyTheme = () => {
  document.documentElement.classList.toggle('dark', isDark.value)
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme()
  localStorage.setItem(THEME_KEY, isDark.value ? 'dark' : 'light')
}
const isSettingsChild = computed(() => {
  return route.path.startsWith('/settings/') && route.path !== '/settings'
})

onMounted(() => {
  const saved = localStorage.getItem(THEME_KEY)
  if (saved === 'dark' || saved === 'light') {
    isDark.value = saved === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()
})

onMounted(() => {
  const mq = window.matchMedia('(min-width: 768px)')
  const update = () => (isMdUp.value = mq.matches)
  update()
  mq.addEventListener('change', update)
  onUnmounted(() => mq.removeEventListener('change', update))
})
</script>

<template>
  <div class="flex h-screen max-md:justify-center">
    <div v-if="!isSettingsChild || isMdUp" class="m-4 flex flex-col gap-4 w-screen md:w-2/8">
      <div class="flex justify-between">
        <h1 class="text-2xl font-bold text-start text-green-400">Configurações</h1>
        <Button
          :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
          severity="success"
          variant="text"
          @click="toggleTheme"
        />
      </div>
      <h1 class="text-xl text-start text-green-400">{{ data?.[0]?.name || 'Usuário' }}</h1>

      <hr />

      <OptionMenu
        v-for="item in configurations"
        :name="item.name"
        :key="item.name"
        :href="item.href"
        :description="item.description"
        :icon="item.icon"
      />
      <Button
        icon="pi pi-sign-out"
        label="Sair"
        severity="success"
        variant="text"
        class="flex items-center text-left justify-start!"
        @click="dialog.open(SignOut)"
      />
      <DynamicDialog />
    </div>
    <div v-if="isSettingsChild" class="w-screen md:w-6/8"><router-view /></div>
  </div>
</template>
