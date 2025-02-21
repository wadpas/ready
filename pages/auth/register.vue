<script setup lang="ts">
  type Payload = {
    email: string
    password: string
  }

  const form = ref<Payload>({
    email: '',
    password: '',
  })

  const onSubmit = async () => {
    try {
      const res = await $fetch('/api/auth/register', {
        method: 'POST',
        body: form.value,
      })
      console.log(res)
      navigateTo('/')
    } catch (error) {
      console.log(error)
    }
  }
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="w-full max-w-sm">
      <form @submit.prevent="onSubmit">
        <Card>
          <CardHeader>
            <CardTitle class="text-2xl">Реєстрація</CardTitle>
            <CardDescription>Введіть інформацію для створення акаунту</CardDescription>
          </CardHeader>
          <CardContent class="grid gap-4">
            <div class="grid gap-2">
              <Label for="email">Пошта</Label>
              <Input
                id="email"
                type="email"
                placeholder="jd@example.com"
                v-model="form.email"
                required />
            </div>
            <div class="grid gap-2">
              <Label for="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                placeholder="*********"
                v-model="form.password"
                required />
            </div>
            <div class="grid grid-cols-1 mt-2">
              <AuthSocialButton
                icon="uil:github"
                label="Github" />
            </div>
          </CardContent>
          <CardFooter class="flex flex-col gap-2">
            <Button
              class="w-full"
              type="submit">
              Зареєструватися
            </Button>
            <p class="mt-4 text-sm text-center text-muted-foreground hover:text-primary">
              Вже маєте акаунт?
              <NuxtLink
                to="/auth/login"
                class="underline">
                Увійти
              </NuxtLink>
            </p>
          </CardFooter>
        </Card>
      </form>
    </div>
  </div>
</template>
