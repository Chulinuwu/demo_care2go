<script setup lang="ts">
import { mockCaregivers } from '@/data'
</script>

<template>
  <div class="space-y-4 md:space-y-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4">
      <h1 class="text-xl md:text-2xl font-bold text-gray-800">ผู้ดูแลทั้งหมด</h1>
      <button class="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg transition text-sm md:text-base">
        + เพิ่มผู้ดูแลใหม่
      </button>
    </div>

    <!-- Caregivers Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      <div v-for="caregiver in mockCaregivers" :key="caregiver.id" class="bg-white rounded-lg shadow-md hover:shadow-lg transition">
        <div class="p-4 md:p-6">
          <!-- Profile -->
          <div class="flex flex-col items-center mb-3 md:mb-4">
            <div class="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mb-3">
              <span class="text-white text-xl md:text-2xl font-bold">{{ caregiver.name.charAt(0) }}</span>
            </div>
            <h3 class="text-base md:text-lg font-semibold text-gray-800 text-center">{{ caregiver.name }}</h3>
            <p class="text-xs md:text-sm text-gray-600">อายุ {{ caregiver.age }} ปี</p>
          </div>
          
          <!-- Rating -->
          <div class="flex items-center justify-center mb-3 md:mb-4">
            <div class="flex items-center">
              <svg v-for="i in 5" :key="i" class="w-4 h-4 md:w-5 md:h-5" :class="i <= caregiver.rating ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span class="ml-1 md:ml-2 text-xs md:text-sm font-semibold text-gray-600">{{ caregiver.rating.toFixed(1) }}</span>
            </div>
          </div>
          
          <!-- Info -->
          <div class="space-y-2 mb-3 md:mb-4">
            <div class="text-xs md:text-sm">
              <span class="text-gray-600">ประสบการณ์:</span>
              <span class="font-medium ml-1">{{ caregiver.experience }} ปี</span>
            </div>
            <div class="text-xs md:text-sm">
              <span class="text-gray-600">ความเชี่ยวชาญ:</span>
              <div class="flex flex-wrap gap-1 mt-1">
                <span v-for="spec in caregiver.specialization" :key="spec" class="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 md:py-1 rounded text-xs">
                  {{ spec }}
                </span>
              </div>
            </div>
            <div class="flex items-center justify-between text-xs md:text-sm">
              <span class="text-gray-600">สถานะ:</span>
              <span :class="[
                'px-2 py-0.5 md:py-1 rounded text-xs font-medium',
                caregiver.status === 'active' ? 'bg-green-100 text-green-700' : caregiver.status === 'busy' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
              ]">
                {{ caregiver.status === 'active' ? 'พร้อมให้บริการ' : caregiver.status === 'busy' ? 'ไม่ว่าง' : 'ไม่ทำงาน' }}
              </span>
            </div>
          </div>
          
          <!-- Actions -->
          <div class="pt-3 md:pt-4 border-t border-gray-200 flex gap-2">
            <button class="flex-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 py-1.5 md:py-2 rounded-lg transition text-xs md:text-sm font-medium">
              ดูโปรไฟล์
            </button>
            <button class="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-600 py-1.5 md:py-2 rounded-lg transition text-xs md:text-sm font-medium">
              แก้ไข
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
