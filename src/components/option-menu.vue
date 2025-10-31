<script setup lang="ts">
import { Button } from 'primevue'
const { name, description, href, icon } = defineProps({
  name: String,
  description: String,
  href: String,
  icon: String,
})
</script>

<template>
  <Button
    :key="name"
    :label="name"
    severity="success"
    variant="text"
    class="flex items-center text-left justify-start!"
  >
    <RouterLink class="w-full" :to="href ? href : '#'">
      <div class="flex justify-start gap-4 items-stretch">
        <span :class="icon + ' pt-2'" />
        <div class="flex flex-col gap-1">
          <span>{{ name }}</span>
          <span v-if="description" class="text-sm text-gray-500">{{ description }} </span>
        </div>
      </div>
    </RouterLink>
  </Button>
</template>
