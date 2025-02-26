<template>
  <div></div>
  <Modal
    :is-modal-visible="isModalVisible"
    @on-close="toggleModal(false)"
    title="Увага!"
    description="Цю дію неможливо відмінити.Ви впевнені?">
    <div class="flex items-center justify-between w-full pt-6 space-x-2">
      <Button
        :disabled="isLoading"
        variant="outline"
        @click="toggleModal(false)">
        Скасувати
      </Button>
      <Button
        :disabled="isLoading"
        variant="destructive"
        @click="emit('onConfirm')">
        Підтвердити
      </Button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
  const { isModalVisible, toggleModal, isLoading } = useStore()
  // const isVisible = computed(() => isModalVisible.value)
  const emit = defineEmits(['onConfirm'])
</script>

<style scoped></style>
