<script setup lang="ts">
import AutoComplete, { type AutoCompleteCompleteEvent } from 'primevue/autocomplete'
import { ref } from 'vue'

const value = ref('')
const items = ref(['Configuração 1', 'Configuração 2', 'Configuração 3'])

const search = (event: AutoCompleteCompleteEvent) => {
  items.value = [...Array(10).keys()].map((item) => event.query + '-' + item)
}
</script>

<template>
  <div class="m-4 flex flex-col gap-4">
    <h1 class="text-2xl font-bold">Configurações</h1>
    <AutoComplete variant="filled" v-model="value" :suggestions="items" @complete="search" />
  </div>

  <router-view />
</template>

<style scoped></style>
