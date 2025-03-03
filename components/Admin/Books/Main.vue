<template>
  <div class="flex items-center justify-between">
    <Heading
      title="Книги"
      description="Панель керування">
      <NuxtLink to="/admin/books/new">
        <Button>
          <Icon
            size="20"
            name="radix-icons:plus" />
          Створити
        </Button>
      </NuxtLink>
    </Heading>
  </div>
  <!-- @vue-ignore -->
  <DataTable
    v-if="status === 'success'"
    :columns="columns"
    :data="books"
    column-to-search="title" />
</template>

<script setup lang="ts">
  import { columns } from '~/components/Admin/Books/columns'
  const { data: books, status } = await useFetch(`/api/books`, {
    key: 'books',
  })
</script>

<style lang="scss" scoped></style>
