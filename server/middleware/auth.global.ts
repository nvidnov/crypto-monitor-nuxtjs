// server/middleware/auth.global.ts
export default defineEventHandler((event) => {
    const token = getCookie(event, 'auth_token')

    // Если пользователь уже на /auth/login, не редиректим
    if (!token && !event.path.startsWith('/auth/login')) {
        event.res.setHeader('location', '/auth/login')
        event.res.statusCode = 302
        event.res.end()
    }
})
