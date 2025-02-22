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
          Додати
        </Button>
      </NuxtLink>
    </Heading>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
