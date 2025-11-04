import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    loadFromStorage() {
      const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token')
      const user = localStorage.getItem('auth_user') || sessionStorage.getItem('auth_user')
      if (token) this.token = token
      if (user) this.user = JSON.parse(user)
    },

    async login({ email, password, remember }) {
      // Simulate server-side auth with a small delay
      await new Promise((r) => setTimeout(r, 400))

      // Very simple mock: accept any password length >= 6 and an email that looks valid
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        throw new Error("Adresse e-mail invalide")
      }
      if (!password || password.length < 6) {
        throw new Error('Mot de passe invalide (minimum 6 caractères)')
      }

      // Create a fake token and user profile
      const fakeToken = btoa(`${email}:${Date.now()}`)
      const user = { email, name: email.split('@')[0] }

      this.token = fakeToken
      this.user = user

      const storage = remember ? localStorage : sessionStorage
      storage.setItem('auth_token', fakeToken)
      storage.setItem('auth_user', JSON.stringify(user))

      return { token: fakeToken, user }
    },

    async register({ email, password }) {
      // Simulate server-side register and store users in localStorage
      await new Promise((r) => setTimeout(r, 400))

      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        throw new Error("Adresse e-mail invalide")
      }
      if (!password || password.length < 6) {
        throw new Error('Le mot de passe doit contenir au moins 6 caractères')
      }

      const users = JSON.parse(localStorage.getItem('mock_users') || '[]')
      if (users.find((u) => u.email === email)) {
        throw new Error('Un compte avec cet email existe déjà')
      }

      users.push({ email, password })
      localStorage.setItem('mock_users', JSON.stringify(users))

      // Optionally auto-login after register, but here we just return success
      return { success: true }
    },

    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('auth_token')
      localStorage.removeItem('auth_user')
      sessionStorage.removeItem('auth_token')
      sessionStorage.removeItem('auth_user')
    },
  },
})
