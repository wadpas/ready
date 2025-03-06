<template>
  <div v-if="status == 'success'">
    <BookGrid :books="books" />
  </div>
</template>

<script setup lang="ts">
  import type { Book } from '~/types'
  const { data: books, status } = await useFetch<Book[]>(`/api/books`, {
    lazy: true,
  })
</script>

<style lang="scss" scoped></style>
