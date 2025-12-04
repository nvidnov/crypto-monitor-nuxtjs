import {useUserStore} from "~/entities/user/model/user";

export default defineNuxtRouteMiddleware((to) => {
    const publicPaths= ['/auth/login', '/auth/register'];
    // Блокируем выполнение на сервере
    if (process.server) return

    const userStore = useUserStore()
    const isAuthenticated = userStore.isLoggedIn
    if (!isAuthenticated &&  !publicPaths.includes(to.fullPath)) {
        return navigateTo(publicPaths[0])
    }
})
