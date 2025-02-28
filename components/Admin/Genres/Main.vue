<template>
  <div class="flex items-center justify-between">
    <Heading
      title="Жанри"
      description="Панель керування">
      <NuxtLink to="/admin/genres/new">
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
    :data="genres"
    column-to-search="name" />
</template>

<script setup lang="ts">
  import { columns } from '~/components/Admin/Genres/columns'
  const { data: genres, status } = await useFetch(`/api/genres`, {
    key: 'genres',
  })
</script>

<style lang="scss" scoped></style>
