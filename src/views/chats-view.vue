<script setup lang="ts">
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Dialog from 'primevue/dialog'
import TreeSelect from 'primevue/treeselect'
import { ref } from 'vue'
import type { TreeNode } from 'primevue/treenode'

import buttonToggle from '@/components/button-toggle.vue'

const visible = ref(false)
const selectedTheme = ref('light')
const nodes = ref<TreeNode[]>([
  { key: 'light', label: 'Light' },
  { key: 'dark', label: 'Dark' },
])
</script>

<template>
  <Button variant="text" severity="success" class="mt-4">
    <RouterLink to="/"> <span class="pi pi-arrow-left mx-4" /> Voltar </RouterLink>
  </Button>
  <Divider />
  <div class="flex flex-col gap-8 p-4">
    <Button label="Editar Tema" @click="visible = true" severity="success" class="w-fit" />
    <Dialog v-model:visible="visible" modal header="Editar Tema" :style="{ width: '25rem' }">
      <TreeSelect
        v-model="selectedTheme"
        :options="nodes"
        placeholder="Select Item"
        class="md:w-80 w-full"
      />
    </Dialog>

    <buttonToggle
      title="Enter envia a mensagem"
      description="Ao clicar enter, sua mensagem será enviada"
    />
    <buttonToggle
      title="Substituir texto por emoji"
      description="O emoji vai substituir o texto específico digitado"
    />
    <buttonToggle
      title="Verificação ortográfica"
      description="O texto digitado será verificado quanto a erros ortográficos"
    />
  </div>
</template>
