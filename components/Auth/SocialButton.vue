<template>
  <Button
    type="button"
    @click="authenticate"
    variant="outline">
    <div class="flex items-center">
      <Icon
        :name="icon"
        class="mr-2"
        size="24" />
      {{ label }}
    </div>
  </Button>
</template>

<script setup lang="ts">
  defineProps<{
    label: string
    icon: string
  }>()

  const authenticate = () => {
    window.location.href = '/api/auth/github'
  }
</script>

<style scoped></style>
