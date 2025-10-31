<script setup lang="ts">
import { Button } from 'primevue'
import type { DynamicDialogInstance } from 'primevue/dynamicdialogoptions'
import { inject, type Ref } from 'vue'

const dialogRef = inject<Ref<DynamicDialogInstance>>('dialogRef')

const closeDialog = () => {
  dialogRef?.value.close()
}
</script>

<template>
  <div class="h-full w-full flex flex-col justify-items-center gap-10">
    <h2 class="font-black text-4xl text-center">Tem certeza que deseja sair?</h2>
    <div class="flex gap-8 justify-center">
      <Button label="Cancelar" severity="success" @click="closeDialog" />
      <Button
        label="Confirmar"
        severity="success"
        @click="
          () => {
            console.log('Usuário deslogado')
            closeDialog()
          }
        "
      />
    </div>
  </div>
</template>
