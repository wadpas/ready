export default defineNuxtRouteMiddleware(async () => {
  const { user } = useUserSession()

  if (user.value && !(user.value.role == 'admin')) return navigateTo('/')
})
