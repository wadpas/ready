<template>
  <div>admin</div>
</template>

<script setup lang="ts">
  definePageMeta({
    middleware: ['auth', 'admin '],
  })
</script>

<style lang="scss" scoped></style>
