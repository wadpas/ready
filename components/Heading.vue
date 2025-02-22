<template>
  <div class="flex items-center justify-between w-full">
    <div class="flex flex-col gap-2">
      <h1 class="text-2xl font-bold">{{ title }}</h1>
      <p class="text-sm text-gray-500">{{ description }}</p>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
  interface HeadingProps {
    title: string
    description?: string
  }
  defineProps<HeadingProps>()
</script>

<style scoped></style>
