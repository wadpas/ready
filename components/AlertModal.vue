<template>
  <Modal
    :isModalVisible="isModalVisible"
    @on-close="emit('onClose')"
    title="Увага!"
    description="Цю дію неможливо відмінити.Ви впевнені?">
    <div class="flex items-center justify-end w-full pt-6 space-x-4">
      <Button
        variant="outline"
        @click="emit('onClose')">
        Скасувати
      </Button>
      <Button
        variant="destructive"
        @click="emit('onClose'), emit('onConfirm')">
        Підтвердити
      </Button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
  defineProps<{
    isModalVisible: boolean
  }>()
  const emit = defineEmits(['onConfirm', 'onClose'])
</script>

<style scoped></style>
