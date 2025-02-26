<template>
  <div>
    <div class="flex items-center justify-between">
      <Heading
        title="Жанр"
        description="Введіть інформацію для створення/редагування жанру">
        <Button
          v-if="isEditing"
          @click="toggleModal(true)"
          variant="destructive">
          <Icon
            size="20"
            name="radix-icons:trash" />
          Видалити
        </Button>
      </Heading>
    </div>
    <Separator class="my-4" />
    <form
      @submit="onSubmit"
      class="w-full space-y-8">
      <div class="gap-8 md:grid md:grid-cols-3">
        <FormField
          v-slot="{ componentField }"
          name="name">
          <FormItem>
            <FormLabel>Назва</FormLabel>
            <FormControl>
              <Input
                placeholder="Детектив"
                v-bind="componentField"
                :disable="isLoading" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </FormField>
      </div>
      <Button
        :disable="isLoading"
        class="ml-auto"
        type="submit">
        Зберегти
      </Button>
    </form>
  </div>
  <AlertModal
    v-if="isModalVisible"
    @on-confirm="deleteGenre"></AlertModal>
</template>

<script setup lang="ts">
  import type { APIError, RouteParams } from '~/types'
  import { toTypedSchema } from '@vee-validate/zod'
  import { useForm } from 'vee-validate'
  import { genreSchema } from '~/server/utils/validations'

  const { isLoading, isModalVisible, toggleLoading, toggleModal, showError, showMessage, toggleError } = useStore()
  const isEditing = ref(true)

  const route = useRoute()
  const { data: currentGenre } = await useFetch(`/api/genres/${(route.params as RouteParams).slug}`)

  watchEffect(() => {
    if (route.params.slug === 'new') {
      isEditing.value = false
    } else if (!currentGenre.value) {
      navigateTo('/admin/genres')
    }
  })

  const formSchema = toTypedSchema(genreSchema)
  const form = useForm({
    validationSchema: formSchema,
    initialValues: currentGenre.value || {},
  })

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      toggleLoading(true)
      if (isEditing.value) {
        $fetch(`/api/genres/${(route.params as RouteParams).slug}`, {
          method: 'PATCH',
          body: values,
        })
      } else {
        const data = await $fetch('/api/genres', {
          method: 'POST',
          body: values,
        })
      }
      showMessage({
        title: 'Операція успішна',
        description: 'Всі дані були успішно збережені',
      })
      await navigateTo('/admin/genres')
    } catch (error) {
      console.log(error)
      const err = toggleError(error as APIError)
      showError(err)
    } finally {
      toggleLoading(false)
    }
  })

  const deleteGenre = async () => {
    try {
      toggleLoading(true)
      $fetch(`/api/genres/${(route.params as RouteParams).slug}`, {
        method: 'DELETE',
      })
      showMessage({
        title: 'Операція успішна',
        description: 'Всі дані були успішно видалені',
      })
      navigateTo('/admin/genres')
    } catch (error) {
      const err = handleError(error)
      showError(err)
    } finally {
      toggleLoading(false)
    }
  }
</script>

<style lang="scss" scoped></style>
