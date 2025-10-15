<script setup lang="ts">
import { mockCaregivers } from '@/data'
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="bg-white rounded-lg shadow p-4 md:p-6">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 class="text-xl md:text-2xl font-semibold text-gray-800">จัดการผู้ดูแล</h2>
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">
          + เพิ่มผู้ดูแลใหม่
        </button>
      </div>
    </div>

    <!-- Caregivers Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
      <div
        v-for="caregiver in mockCaregivers"
        :key="caregiver.id"
        class="bg-white rounded-lg shadow hover:shadow-lg transition p-6"
      >
        <div class="flex items-start gap-4">
          <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span class="text-2xl font-bold text-indigo-600">{{ caregiver.name.charAt(0) }}</span>
          </div>
          
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg font-semibold text-gray-800 truncate">{{ caregiver.name }}</h3>
              <span
                :class="[
                  'px-2 py-1 rounded-full text-xs whitespace-nowrap ml-2',
                  caregiver.status === 'active' ? 'bg-green-100 text-green-800' :
                  caregiver.status === 'busy' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                ]"
              >
                {{ caregiver.status === 'active' ? 'พร้อมงาน' : caregiver.status === 'busy' ? 'ไม่ว่าง' : 'ไม่ว่าง' }}
              </span>
            </div>
            
            <div class="space-y-1 text-sm mb-3">
              <div class="flex items-center gap-2 text-gray-600">
                <span>โทร:</span>
                <span class="text-gray-900">{{ caregiver.phone }}</span>
              </div>
              <div class="flex items-center gap-2 text-gray-600">
                <span>อีเมล:</span>
                <span class="text-gray-900 truncate">{{ caregiver.email }}</span>
              </div>
              <div class="flex items-center gap-2 text-gray-600">
                <span>ประสบการณ์:</span>
                <span class="text-gray-900">{{ caregiver.experience }} ปี</span>
              </div>
              <div class="flex items-center gap-2 text-gray-600">
                <span>คะแนน:</span>
                <span class="text-yellow-600 font-medium">⭐ {{ caregiver.rating }}/5</span>
              </div>
            </div>

            <div class="mb-3">
              <p class="text-xs text-gray-600 mb-1">ความเชี่ยวชาญ:</p>
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="spec in caregiver.specialization"
                  :key="spec"
                  class="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-xs"
                >
                  {{ spec }}
                </span>
              </div>
            </div>

            <div class="flex gap-2">
              <button class="flex-1 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition text-sm">
                ดูรายละเอียด
              </button>
              <button class="flex-1 bg-gray-50 text-gray-600 hover:bg-gray-100 px-3 py-1.5 rounded-lg transition text-sm">
                แก้ไข
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
