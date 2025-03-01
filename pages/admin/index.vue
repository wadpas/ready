<template>
  <div>Admin page</div>
  <NuxtLink
    class="mr-2 text-sky-500"
    to="/admin/genres">
    genres
  </NuxtLink>
  <NuxtLink
    class="mr-2 text-sky-500"
    to="/admin/authors">
    authors
  </NuxtLink>
</template>

<script setup lang="ts">
  definePageMeta({
    middleware: ['auth', 'admin '],
  })
</script>

<style lang="scss" scoped></style>
