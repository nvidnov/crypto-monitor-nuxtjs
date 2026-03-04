const privatePaths = ['/profile', '/settings']

export default defineEventHandler((event) => {
  const token = getCookie(event, 'auth_token')

  const isPrivate = privatePaths.some((path) => event.path.startsWith(path))

  if (!token && isPrivate) {
    return sendRedirect(event, '/auth/login')
  }

  if (token && event.path.startsWith('/auth')) {
    return sendRedirect(event, '/')
  }
})
