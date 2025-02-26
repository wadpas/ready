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
    {{ currentGenres }}
  </div>
</template>

<script setup lang="ts">
  const { data: currentGenres } = await useFetch(`/api/genres`)
</script>

<style lang="scss" scoped></style>
