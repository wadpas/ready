<template>
  <div>
    <div class="flex items-center justify-between">
      <Heading
        :title="title"
        :description="description">
        <Button
          v-if="isEditing"
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
        {{ action }}
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
  import type { RouteParams } from '~/types'
  import { toTypedSchema } from '@vee-validate/zod'
  import { useForm } from 'vee-validate'

  const { isLoading, appError, toggleLoading, toggleError, showError, showMessage } = useStore()
  const isEditing = ref(true)
  const title = ref('Жанр')
  const description = ref('Редагування')
  const action = ref('Зберегти')

  const route = useRoute()
  const { data: currentGenre } = await useFetch(`/api/genres/${(route.params as RouteParams).genreId}`)

  const formSchema = toTypedSchema(genreSchema)
  const form = useForm({
    validationSchema: formSchema,
    initialValues: currentGenre.value || {},
  })

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      toggleLoading(true)
      if (isEditing.value) {
        console.log('Edit', values)
      } else {
        console.log('Create', values)
      }
      showMessage({
        title: title.value,
        description: description.value + 'успішне',
      })
      navigateTo('/admin/genres')
    } catch (error) {
      const err = handleError(error)
      showError(err)
    } finally {
    }
  })
</script>

<style lang="scss" scoped></style>
s
