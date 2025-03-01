<template>
  <DropdownMenu disabled="isLoading">
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
      <DropdownMenuItem @click="copy(author.slug)">
        <Icon
          size="20"
          name="radix-icons:copy" />
        <span>Копіювати</span>
      </DropdownMenuItem>
      <DropdownMenuItem @click="navigateTo(`/admin/authors/${author.slug}`)">
        <Icon
          size="20"
          name="radix-icons:pencil-2" />
        <span>Редагувати</span>
      </DropdownMenuItem>
      <DropdownMenuItem @click="isModalVisible = true">
        <Icon
          size="20"
          name="radix-icons:trash" />
        <span>Видалити</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  <AlertModal
    :isModalVisible="isModalVisible"
    @on-close="isModalVisible = false"
    @on-confirm="deleteAuthor(author.slug)">
  </AlertModal>
</template>

<script setup lang="ts">
  import { toast } from '~/components/ui/toast'
  import type { APIError } from '~/types'
  const isModalVisible = ref(false)

  defineProps<{
    author: {
      slug: string
    }
  }>()

  function copy(slug: string) {
    navigator.clipboard.writeText(slug)
    toast({
      title: 'Виконано!',
      description: 'Назва жанру (трансліт) скопійовано',
    })
  }

  const deleteAuthor = async (slug: string) => {
    try {
      await $fetch(`/api/authors/${slug}`, {
        method: 'DELETE',
      })
      toast({
        title: 'Операція успішна',
        description: 'Дані були успішно видалені',
      })
      refreshNuxtData('authors')
    } catch (error: unknown) {
      const err = error as APIError
      toast({
        variant: 'destructive',
        title: ` Помилка ${err.statusCode}`,
        description: err.message,
      })
    }
  }
</script>
