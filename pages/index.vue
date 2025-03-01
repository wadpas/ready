<template>
  <NuxtLink to="/auth/login">Login</NuxtLink>
  <NuxtLink to="/auth/register">Register</NuxtLink>
  <NuxtLink to="/admin">Admin</NuxtLink>

  <Button @click="logout">Logout</Button>
</template>

<script setup lang="ts">
  definePageMeta({
    middleware: ['auth'],
  })
  const { user, clear } = useUserSession()

  const logout = async () => {
    await clear()
    navigateTo('/auth/login')
  }
</script>

<style scoped></style>
