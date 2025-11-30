// middleware/auth.ts
export default defineNuxtRouteMiddleware((to) => {
    const userStore = useUserStore()
    console.log('13')
    // Только дополнительная проверка на клиенте
    if (process.client && !userStore.isLoggedIn && !to.path.startsWith('/auth')) {
        return navigateTo('/auth/login')
    }
})
