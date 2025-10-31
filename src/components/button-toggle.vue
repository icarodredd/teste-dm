<script setup lang="ts">
const { title, description } = defineProps({
  title: String,
  description: String,
})
import ToggleSwitch from 'primevue/toggleswitch'
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <div class="flex items-center text-left justify-start! text-green-400">
    <div class="flex justify-between gap-4 items-center">
      <div class="flex flex-col gap-1">
        <span>{{ title }}</span>
        <span class="text-sm text-gray-500">
          {{ description }}
        </span>
      </div>
      <div class="flex flex-col gap-1">
        <ToggleSwitch v-model="value" />
      </div>
    </div>
  </div>
</template>
