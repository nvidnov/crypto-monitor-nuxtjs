import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null as null | { id: number; name: string },
        token: null as string | null,
    }),
    getters: {
        isLoggedIn: (state) => !!state.user,
    },
    actions: {
        setUser(userData: { id: number; name: string }) {
            this.user = userData
        },
        setToken(token: string) {
            this.token = token
        },
        logout() {
            this.user = null
            this.token = null
        },
    },
})
