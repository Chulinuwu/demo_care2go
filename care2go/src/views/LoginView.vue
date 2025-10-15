<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
  error.value = ''
  isLoading.value = true

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500))

  const adminUsername = import.meta.env.VITE_ADMIN_USERNAME
  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD

  if (username.value === adminUsername && password.value === adminPassword) {
    localStorage.setItem('isAuthenticated', 'true')
    router.push('/')
  } else {
    error.value = 'Username หรือ Password ไม่ถูกต้อง'
  }

  isLoading.value = false
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-8">
    <div class="w-full max-w-md">
      <!-- Logo/Title -->
      <div class="text-center mb-6 md:mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Care2Go</h1>
      </div>

      <!-- Login Form -->
      <div class="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-6">เข้าสู่ระบบ</h2>
        
        <form @submit.prevent="handleLogin" class="space-y-4">
          <!-- Username Input -->
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              id="username"
              v-model="username"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="กรอก username"
            />
          </div>

          <!-- Password Input -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="กรอก password"
            />
          </div>

          <!-- Error Message -->
          <div v-if="error" class="text-red-600 text-sm">
            {{ error }}
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
          >
            {{ isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional styles if needed */
</style>
