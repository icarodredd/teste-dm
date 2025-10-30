<script setup lang="ts">
import AutoComplete, { type AutoCompleteCompleteEvent } from 'primevue/autocomplete'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { Button } from 'primevue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMdUp = ref(false)
const value = ref('')
const items = ref(['Configuração 1', 'Configuração 2', 'Configuração 3'])
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
  { name: 'Sair', icon: 'pi pi-sign-out', href: '/settings' },
])

const search = (event: AutoCompleteCompleteEvent) => {
  items.value = [...Array(10).keys()].map((item) => event.query + '-' + item)
}

const isSettingsChild = computed(() => {
  return route.path.startsWith('/settings/') && route.path !== '/settings'
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
      <h1 class="text-2xl font-bold text-start text-green-400">Configurações</h1>
      <AutoComplete
        fluid
        variant="filled"
        v-model="value"
        :suggestions="items"
        @complete="search"
      />

      <Button
        v-for="item in configurations"
        :key="item.name"
        :label="item.name"
        severity="success"
        variant="text"
        class="flex items-center text-left justify-start!"
      >
        <RouterLink class="w-full" :to="item.href">
          <div class="flex justify-start gap-4 items-stretch">
            <span :class="item.icon + ' pt-2'" />
            <div class="flex flex-col gap-1">
              <span>{{ item.name }}</span>
              <span v-if="item.description" class="text-sm text-gray-500"
                >{{ item.description }}
              </span>
            </div>
          </div>
        </RouterLink>
      </Button>
    </div>
    <div v-if="isSettingsChild" class="w-screen md:w-6/8"><router-view /></div>
  </div>
</template>

<style scoped></style>
