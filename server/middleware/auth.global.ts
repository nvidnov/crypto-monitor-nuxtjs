export default defineEventHandler((event) => {
    const token = getCookie(event, 'auth_token')

    const publicPaths = [
        '/auth/login',
        '/auth/register',
        '/_nuxt',
        '/api',
        '/favicon.ico'
    ]

    const isPublicPath = publicPaths.some(path => event.path?.startsWith(path))
    const isAuthPage = event.path?.startsWith('/auth')

    // Неавторизованный пользователь
    if (!token && !isPublicPath) {
        event.node.res.setHeader('location', '/auth/login')
        event.node.res.statusCode = 302
        event.node.res.end()
    }

    // Авторизованный пользователь
    if (token && isAuthPage) {
        event.node.res.setHeader('location', '/')
        event.node.res.statusCode = 302
        event.node.res.end()
    }
})
