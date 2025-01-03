import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'

export const useUserStore = defineStore('user', {
    state: () => {
        user: reactive({})
    },
    getters: () => {},
    actions: {
        setUser(user) {
            this.user = user
        }
    }
})
