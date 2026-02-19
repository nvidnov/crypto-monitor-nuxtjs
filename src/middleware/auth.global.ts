import {useUserStore} from "~/entities/user/model/user";

export default defineNuxtRouteMiddleware((to) => {
    const publicPaths= ['/auth/login', '/auth/register', '/error'];
    // Блокируем выполнение на сервере
    if (process.server) return

    const userStore = useUserStore()
    const isAuthenticated = userStore.isLoggedIn
    if (!isAuthenticated &&  !publicPaths.includes(to.path)) {
        return navigateTo(publicPaths[0])
    }
})
