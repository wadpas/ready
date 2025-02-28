<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="ghost"
        class="w-8 h-8 p-0">
        <Icon
          size="20"
          name="radix-icons:dots-horizontal" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="copy(genre.slug)">
        <Icon
          size="20"
          name="radix-icons:copy" />
        <span>Копіювати</span>
      </DropdownMenuItem>
      <DropdownMenuItem @click="navigateTo(`/admin/genres/${genre.slug}`)">
        <Icon
          size="20"
          name="radix-icons:pencil-2" />
        <span>Редагувати</span>
      </DropdownMenuItem>
      <DropdownMenuItem @click="toggleAlertModal(true)">
        <Icon
          size="20"
          name="radix-icons:trash" />
        <span>Видалити</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  <AlertModal
    v-if="isModalVisible"
    @on-confirm="deleteGenre(genre.slug)">
  </AlertModal>
</template>

<script setup lang="ts">
  const { toggleAlertModal, toggleLoading, showError, showMessage, isModalVisible } = useStore()
  const props = defineProps<{
    genre: {
      slug: string
    }
  }>()

  function copy(slug: string) {
    navigator.clipboard.writeText(slug)
    showMessage({
      title: 'Виконано!',
      description: 'Назва жанру (трансліт) скопійовано',
    })
  }

  const deleteGenre = async (slug: string) => {
    try {
      toggleLoading(true)
      $fetch(`/api/genres/${slug}`, {
        method: 'DELETE',
      })
      console.log(slug)

      showMessage({
        title: 'Операція успішна',
        description: 'Дані були успішно видалені',
      })
      refreshNuxtData('genres')
    } catch (error) {
      const err = handleError(error)
      showError(err)
    } finally {
      toggleLoading(false)
    }
  }
</script>
