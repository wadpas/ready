<template>
  <div class="flex flex-col justify-end rounded-sm shadow shadow-gray-50">
    <NuxtImg
      :src="book.coverURLs[0]"
      :alt="book.title"
      class="aspect-[55/85]" />
    <div class="px-2 py-1">
      <p class="font-semibold line-clamp-1">{{ book.title }}</p>
      <p class="line-clamp-1">{{ book.authors[0].name }}</p>
      <p class="">{{ book.price }} грн</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Book } from '~/types'

  defineProps<{
    book: Book | null
  }>()
</script>
