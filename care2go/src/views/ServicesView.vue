<script setup lang="ts">
import { mockServices } from '@/data'
</script>

<template>
  <div class="space-y-4 md:space-y-6">
    <!-- Header -->
    <div class="bg-white rounded-lg shadow p-4 md:p-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4">
        <h2 class="text-lg md:text-2xl font-semibold text-gray-800">จัดการบริการ</h2>
        <button class="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg transition text-sm md:text-base">
          + เพิ่มบริการใหม่
        </button>
      </div>
    </div>

    <!-- Services Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
      <div
        v-for="service in mockServices"
        :key="service.id"
        class="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
      >
        <div class="p-4 md:p-6">
          <div class="flex items-center justify-between mb-3 md:mb-4">
            <h3 class="text-base md:text-lg font-semibold text-gray-800 flex-1 pr-2">{{ service.name }}</h3>
            <span
              :class="[
                'px-2 py-1 rounded-full text-xs whitespace-nowrap',
                service.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              ]"
            >
              {{ service.isActive ? 'เปิดใช้งาน' : 'ปิดใช้งาน' }}
            </span>
          </div>
          
          <p class="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 line-clamp-2">{{ service.description }}</p>
          
          <div class="space-y-2">
            <div class="flex items-center justify-between text-xs md:text-sm">
              <span class="text-gray-600">ราคา:</span>
              <span class="font-bold text-indigo-600 text-base md:text-lg">{{ service.price.toLocaleString() }} ฿</span>
            </div>
            <div class="flex items-center justify-between text-xs md:text-sm">
              <span class="text-gray-600">ระยะเวลา:</span>
              <span class="font-medium text-gray-900">{{ service.duration }}</span>
            </div>
          </div>
          
          <div class="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-200 flex gap-2">
            <button class="flex-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 py-1.5 md:py-2 rounded-lg transition text-xs md:text-sm font-medium">
              แก้ไข
            </button>
            <button class="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-600 py-1.5 md:py-2 rounded-lg transition text-xs md:text-sm font-medium">
              รายละเอียด
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
