<template>
  <div class="flex-col">
    <div class="flex-col pt-6 space-y-4">
      <AdminBooksMain />
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    middleware: ['auth', 'admin '],
  })
</script>

<style lang="scss" scoped></style>
