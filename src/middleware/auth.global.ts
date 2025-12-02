import { useUserStore } from '~/entities/user/model/user'
export default defineNuxtRouteMiddleware((to) => {
    // Блокируем выполнение на сервере
    if (process.server) return

    // const userStore = useUserStore()
    const isAuthenticated = useUserStore().isAuthenticated
})

