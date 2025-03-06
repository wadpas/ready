<template>
  <div class="grid grid-cols-8 gap-6 py-8 mx-auto">
    <BookCard
      v-for="book in books"
      :key="book.id"
      :book="book" />
  </div>
</template>

<script setup lang="ts">
  import type { Book } from '~/types'

  defineProps<{
    books: Book[]
  }>()
</script>

<style scoped></style>
s
