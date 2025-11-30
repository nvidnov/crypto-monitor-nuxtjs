// composables/useAuth.ts
import { ref } from 'vue'
import { useUserStore } from '~/stores/user'

export const useAuth = () => {
    const user = ref(null)

    const login = async (credentials) => {
        // fetch login
        user.value = { name: 'Nikita' }
    }

    const logout = () => {
        user.value = null
    }

    return { user, login, logout }
}
