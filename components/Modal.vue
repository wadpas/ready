<template>
  <Dialog
    :open="isModalVisible"
    @update:open="emit('onClose')">
    <DialogContent>
      <DialogHeader>
        <DialogTitle v-if="title">{{ title }}</DialogTitle>
        <DialogDescription v-if="description">
          {{ description }}
        </DialogDescription>
      </DialogHeader>
      <div>
        <slot />
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
  defineProps<{
    title: string
    description: string
    isModalVisible: boolean
  }>()

  const emit = defineEmits(['onClose'])
</script>

<style scoped></style>
