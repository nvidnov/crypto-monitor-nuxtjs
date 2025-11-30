import { useUserStore } from '~/stores/user'

export default defineNuxtRouteMiddleware((to) => {
    const userStore = useUserStore()

    // Неавторизованный пользователь пытается попасть на защищённую страницу
    if (!userStore.isLoggedIn && to.path !== '/auth/login') {
        return navigateTo('/auth/login')
    }

    // Авторизованный пользователь пытается зайти на /auth/login
    if (userStore.isLoggedIn && to.path.startsWith('/auth')) {
        return navigateTo('/')
    }
})
