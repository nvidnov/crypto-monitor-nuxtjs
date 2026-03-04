import { useUserStore } from '~/entities/user/model/user'

const privatePaths = ['/profile', '/settings']

export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return

  const userStore = useUserStore()
  const isAuthenticated = userStore.isLoggedIn

  if (!isAuthenticated && privatePaths.some((p) => to.path.startsWith(p))) {
    return navigateTo('/auth/login')
  }

  if (isAuthenticated && to.path.startsWith('/auth')) {
    return navigateTo('/')
  }
})
