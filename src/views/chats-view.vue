<script setup lang="ts">
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Dialog from 'primevue/dialog'
import TreeSelect from 'primevue/treeselect'
import { ref } from 'vue'
import type { TreeNode } from 'primevue/treenode'
import ToggleSwitch from 'primevue/toggleswitch'

const visible = ref(false)
const selectedTheme = ref('light')
const nodes = ref<TreeNode[]>([
  { key: 'light', label: 'Light' },
  { key: 'dark', label: 'Dark' },
])
const enterIsSend = ref(false)
const emojiReplace = ref(false)
const spellCheck = ref(true)
</script>

<template>
  <Button variant="text" severity="success" class="mt-4">
    <RouterLink to="/"> <span class="pi pi-arrow-left mx-4" /> Voltar </RouterLink>
  </Button>
  <Divider />
  <div class="flex flex-col gap-8">
    <Button label="Editar Tema" @click="visible = true" severity="success" class="w-fit" />
    <Dialog v-model:visible="visible" modal header="Editar Tema" :style="{ width: '25rem' }">
      <TreeSelect
        v-model="selectedTheme"
        :options="nodes"
        placeholder="Select Item"
        class="md:w-80 w-full"
      />
    </Dialog>
    <div class="flex items-center text-left justify-start! text-green-400">
      <div class="flex justify-between gap-4 items-center">
        <div class="flex flex-col gap-1">
          <span>Enter envia a mensagem</span>
          <span class="text-sm text-gray-500"> Ao clicar enter, sua mensagem será enviada </span>
        </div>
        <div class="flex flex-col gap-1">
          <ToggleSwitch v-model="enterIsSend" />
        </div>
      </div>
    </div>
    <div class="flex items-center text-left justify-start! text-green-400">
      <div class="flex justify-between gap-4 items-center">
        <div class="flex flex-col gap-1">
          <span>Substituir texto por emoji</span>
          <span class="text-sm text-gray-500">
            O emoji vai substituir o texto específico digitado
          </span>
        </div>
        <div class="flex flex-col gap-1">
          <ToggleSwitch v-model="emojiReplace" />
        </div>
      </div>
    </div>
    <div class="flex items-center text-left justify-start! text-green-400">
      <div class="flex justify-between gap-4 items-center">
        <div class="flex flex-col gap-1">
          <span>Verificação ortográfica</span>
          <span class="text-sm text-gray-500">
            O texto digitado será verificado quanto a erros ortográficos
          </span>
        </div>
        <div class="flex flex-col gap-1">
          <ToggleSwitch v-model="spellCheck" />
        </div>
      </div>
    </div>
  </div>
</template>
