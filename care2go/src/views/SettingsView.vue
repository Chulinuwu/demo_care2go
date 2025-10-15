<script setup lang="ts">
import { ref } from 'vue'

const settings = ref({
  siteName: 'Care2Go',
  email: 'admin@care2go.com',
  phone: '02-123-4567',
  address: '123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110',
  notifications: {
    email: true,
    sms: false,
    push: true
  },
  business: {
    openTime: '08:00',
    closeTime: '20:00',
    workingDays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  }
})

const handleSave = () => {
  alert('บันทึกการตั้งค่าเรียบร้อยแล้ว')
}
</script>

<template>
  <div class="space-y-6">
    <!-- General Settings -->
    <div class="bg-white rounded-lg shadow">
      <div class="p-6 border-b border-gray-200">
        <h2 class="text-xl font-semibold text-gray-800">ตั้งค่าทั่วไป</h2>
      </div>
      <div class="p-6 space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">ชื่อธุรกิจ</label>
          <input
            v-model="settings.siteName"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">อีเมล</label>
            <input
              v-model="settings.email"
              type="email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">เบอร์โทรศัพท์</label>
            <input
              v-model="settings.phone"
              type="tel"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">ที่อยู่</label>
          <textarea
            v-model="settings.address"
            rows="3"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>
      </div>
    </div>

    <!-- Business Hours -->
    <div class="bg-white rounded-lg shadow">
      <div class="p-6 border-b border-gray-200">
        <h2 class="text-xl font-semibold text-gray-800">เวลาทำการ</h2>
      </div>
      <div class="p-6 space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">เวลาเปิด</label>
            <input
              v-model="settings.business.openTime"
              type="time"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">เวลาปิด</label>
            <input
              v-model="settings.business.closeTime"
              type="time"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">วันทำการ</label>
          <div class="flex flex-wrap gap-2">
            <label v-for="day in [
              { value: 'mon', label: 'จันทร์' },
              { value: 'tue', label: 'อังคาร' },
              { value: 'wed', label: 'พุธ' },
              { value: 'thu', label: 'พฤหัส' },
              { value: 'fri', label: 'ศุกร์' },
              { value: 'sat', label: 'เสาร์' },
              { value: 'sun', label: 'อาทิตย์' }
            ]" :key="day.value" class="flex items-center">
              <input
                type="checkbox"
                :value="day.value"
                v-model="settings.business.workingDays"
                class="mr-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span class="text-sm text-gray-700">{{ day.label }}</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Notifications -->
    <div class="bg-white rounded-lg shadow">
      <div class="p-6 border-b border-gray-200">
        <h2 class="text-xl font-semibold text-gray-800">การแจ้งเตือน</h2>
      </div>
      <div class="p-6 space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-gray-900">อีเมล</div>
            <div class="text-sm text-gray-600">รับการแจ้งเตือนผ่านอีเมล</div>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" v-model="settings.notifications.email" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-gray-900">SMS</div>
            <div class="text-sm text-gray-600">รับการแจ้งเตือนผ่าน SMS</div>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" v-model="settings.notifications.sms" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-gray-900">Push Notification</div>
            <div class="text-sm text-gray-600">รับการแจ้งเตือนแบบ Push</div>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" v-model="settings.notifications.push" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>
      </div>
    </div>

    <!-- Danger Zone -->
    <div class="bg-white rounded-lg shadow border-2 border-red-200">
      <div class="p-6 border-b border-red-200 bg-red-50">
        <h2 class="text-xl font-semibold text-red-800">Danger Zone</h2>
      </div>
      <div class="p-6 space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-gray-900">ล้างข้อมูลทั้งหมด</div>
            <div class="text-sm text-gray-600">ลบข้อมูลการจอง ผู้ใช้งาน และข้อมูลอื่นๆ ทั้งหมด</div>
          </div>
          <button class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition">
            ล้างข้อมูล
          </button>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-gray-900">ปิดใช้งานระบบ</div>
            <div class="text-sm text-gray-600">ปิดการใช้งานระบบชั่วคราว</div>
          </div>
          <button class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition">
            ปิดระบบ
          </button>
        </div>
      </div>
    </div>

    <!-- Save Button -->
    <div class="flex justify-end">
      <button
        @click="handleSave"
        class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition"
      >
        บันทึกการตั้งค่า
      </button>
    </div>
  </div>
</template>
