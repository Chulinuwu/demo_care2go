<script setup lang="ts">
import { mockServices } from '@/data'
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="bg-white rounded-lg shadow p-4 md:p-6">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 class="text-xl md:text-2xl font-semibold text-gray-800">จัดการบริการ</h2>
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">
          + เพิ่มบริการใหม่
        </button>
      </div>
    </div>

    <!-- Services Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <div
        v-for="service in mockServices"
        :key="service.id"
        class="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
      >
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-800">{{ service.name }}</h3>
            <span
              :class="[
                'px-2 py-1 rounded-full text-xs',
                service.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              ]"
            >
              {{ service.isActive ? 'เปิดใช้งาน' : 'ปิดใช้งาน' }}
            </span>
          </div>
          
          <p class="text-sm text-gray-600 mb-4">{{ service.description }}</p>
          
          <div class="space-y-2 mb-4">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">หมวดหมู่:</span>
              <span class="font-medium text-gray-900">{{ service.category }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">ระยะเวลา:</span>
              <span class="font-medium text-gray-900">{{ service.duration }} ชั่วโมง</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">ราคา:</span>
              <span class="font-medium text-indigo-600">{{ service.price.toLocaleString() }} ฿</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">จำนวนการจอง:</span>
              <span class="font-medium text-gray-900">{{ service.totalBookings }} ครั้ง</span>
            </div>
          </div>

          <div class="flex gap-2">
            <button class="flex-1 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-4 py-2 rounded-lg transition text-sm">
              แก้ไข
            </button>
            <button class="flex-1 bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg transition text-sm">
              ลบ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
