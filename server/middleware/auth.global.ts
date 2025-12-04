export default defineEventHandler((event) => {
    const token = getCookie(event, 'auth_token')

    const publicPaths = ['/auth/login', '/auth/register', '/api']

    const isPublic = publicPaths.some(path =>
        event.path.startsWith(path)
    )

    // НЕавторизованный пользователь → не пускаем на приватные страницы
    if (!token && !isPublic) {
        return sendRedirect(event, '/auth/login')
    }

    // Авторизованный → не пускаем на страницы логина
    if (token && event.path.startsWith('/auth')) {
        return sendRedirect(event, '/')
    }
})
