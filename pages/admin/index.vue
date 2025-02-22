<template>
  <div>ADMIN</div>
  <NuxtLink to="/admin/genres">genres</NuxtLink>
</template>

<script setup lang="ts">
  definePageMeta({
    middleware: ['auth', 'admin '],
  })
</script>

<style lang="scss" scoped></style>
