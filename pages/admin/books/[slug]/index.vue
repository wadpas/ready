<template>
  <div class="flex-col">
    <div class="flex-col p-8 pt-6 space-y-4"><AdminBooksForm /></div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    middleware: ['auth', 'admin '],
  })
</script>

<style lang="scss" scoped></style>
