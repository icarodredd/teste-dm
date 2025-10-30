<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import ToggleSwitch from 'primevue/toggleswitch'

const checked = ref(true)
</script>

<template>
  <Button variant="text" severity="success" class="mt-4">
    <RouterLink to="/"> <span class="pi pi-arrow-left mx-4" /> Voltar </RouterLink>
  </Button>
  <Divider />
  <div class="flex items-center text-left justify-start! text-green-400 p-4">
    <div class="flex justify-between gap-4 items-center">
      <span class="pi pi-lock" />
      <div class="flex flex-col gap-1">
        <span>Mostrar notificações de segurança nesse dispositivo</span>
        <span class="text-sm text-gray-500">
          Seja notificado quando seu código de segurança mudar
        </span>
      </div>
      <div class="flex flex-col gap-1">
        <ToggleSwitch v-model="checked" />
      </div>
    </div>
  </div>
</template>
