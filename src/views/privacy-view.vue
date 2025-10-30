<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import ToggleSwitch from 'primevue/toggleswitch'

const lastSeen = ref(true)
const linkPreview = ref(false)
</script>

<template>
  <Button variant="text" severity="success" class="mt-4">
    <RouterLink to="/"> <span class="pi pi-arrow-left mx-4" /> Voltar </RouterLink>
  </Button>
  <Divider />
  <div class="flex flex-col gap-8 p-4">
    <div class="flex items-center text-left justify-start! text-green-400">
      <div class="flex justify-between gap-4 items-center">
        <span class="pi pi-eye-slash" />
        <div class="flex flex-col gap-1">
          <span>Visto por último</span>
          <span class="text-sm text-gray-500">
            Se desativado, o seu visto por último e status não serão visíveis para ninguém, nem
            mesmo para você
          </span>
        </div>
        <div class="flex flex-col gap-1">
          <ToggleSwitch v-model="lastSeen" />
        </div>
      </div>
    </div>
    <div class="flex items-center text-left justify-start! text-green-400">
      <div class="flex justify-between gap-4 items-center">
        <span class="pi pi-check" />
        <div class="flex flex-col gap-1">
          <span>Desativar preview de links</span>
          <span class="text-sm text-gray-500">
            Para te ajudar a proteger sua privacidade, previews de links serão desativadas
          </span>
        </div>
        <div class="flex flex-col gap-1">
          <ToggleSwitch v-model="linkPreview" />
        </div>
      </div>
    </div>
  </div>
</template>
