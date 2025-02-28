<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="w-full max-w-sm">
      <form @submit.prevent="onSubmit">
        <Card>
          <CardHeader>
            <CardTitle class="text-2xl">Вхід</CardTitle>
            <CardDescription>Введіть інформацію для входу в акаунту</CardDescription>
            <p>test@test.test</p>
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
              Увійти
            </Button>
            <p class="mt-4 text-sm text-center text-muted-foreground hover:text-primary">
              Вже маєте акаунт?
              <NuxtLink
                to="/auth/register"
                class="underline">
                Реєстрація
              </NuxtLink>
            </p>
          </CardFooter>
        </Card>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { toast } from '~/components/ui/toast'
  import type { APIError } from '~/types'

  const { user, fetch: refreshSession } = useUserSession()

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
      await $fetch('/api/auth/login', {
        method: 'POST',
        body: form.value,
      })
      toast({
        title: 'Вхід успішний',
        description: `Вітаємо ${user.value} на сайті!`,
      })
      await refreshSession()
      await navigateTo('/')
      navigateTo('/')
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
