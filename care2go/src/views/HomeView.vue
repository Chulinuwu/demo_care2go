<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const features = [
  {
    icon: '🏥',
    title: 'บริการดูแลผู้สูงอายุ',
    description: 'ทีมงานมืออาชีพพร้อมดูแลผู้สูงอายุของคุณด้วยใจ'
  },
  {
    icon: '👨‍⚕️',
    title: 'บุคลากรที่ผ่านการอบรม',
    description: 'ผู้ดูแลทุกคนได้รับการอบรมและมีประสบการณ์'
  },
  {
    icon: '📱',
    title: 'ติดตามสถานะออนไลน์',
    description: 'ติดตามการดูแลแบบเรียลไทม์ผ่านแอปพลิเคชัน'
  },
  {
    icon: '⏰',
    title: 'บริการ 24/7',
    description: 'พร้อมให้บริการตลอด 24 ชั่วโมง ทุกวัน'
  }
]

const handleLogout = () => {
  localStorage.removeItem('isAuthenticated')
  router.push('/login')
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Header with Logout -->
    <div class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-800">Care2Go</h1>
        <button
          @click="handleLogout"
          class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
        >
          ออกจากระบบ
        </button>
      </div>
    </div>

    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Care2Go
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          บริการดูแลผู้สูงอายุที่บ้าน ด้วยใจจริง เหมือนคนในครอบครัว
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            เริ่มใช้บริการ
          </button>
          <button class="bg-white hover:bg-gray-50 text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            ดูข้อมูลเพิ่มเติม
          </button>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
        >
          <div class="text-4xl mb-4">{{ feature.icon }}</div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600">
            {{ feature.description }}
          </p>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          พร้อมเริ่มต้นแล้วหรือยัง?
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          สมัครสมาชิกวันนี้ เพื่อรับบริการดูแลผู้สูงอายุคุณภาพ พร้อมโปรโมชั่นพิเศษสำหรับสมาชิกใหม่
        </p>
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-12 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
          สมัครสมาชิกฟรี
        </button>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8 mt-16">
      <div class="container mx-auto px-4 text-center">
        <p class="text-gray-400">
          © 2025 Care2Go. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>
