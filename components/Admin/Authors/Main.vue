<template>
  <div class="flex items-center justify-between">
    <Heading
      title="Автори"
      description="Панель керування">
      <NuxtLink to="/admin/authors/new">
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
    :data="authors"
    column-to-search="name" />
</template>

<script setup lang="ts">
  import { columns } from '~/components/Admin/Authors/columns'
  const { data: authors, status } = await useFetch(`/api/authors`, {
    key: 'authors',
  })
</script>

<style lang="scss" scoped></style>
