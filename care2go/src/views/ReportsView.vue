<script setup lang="ts">
import { computed } from 'vue'
import { mockAppointments, mockMonthlyRevenue, mockServices, mockCaregivers } from '@/data'

const totalAppointments = computed(() => mockAppointments.length)
const completedAppointments = computed(() => 
  mockAppointments.filter(a => a.serviceStatus === 'เสร็จสิ้น').length
)
const totalRevenue = computed(() => 
  mockMonthlyRevenue.reduce((sum, item) => sum + item.amount, 0)
)
const totalCaregivers = computed(() => mockCaregivers.length)
const activeCaregivers = computed(() => 
  mockCaregivers.filter(c => c.status === 'active').length
)

const topServices = computed(() => 
  mockServices
    .sort((a, b) => b.totalBookings - a.totalBookings)
    .slice(0, 5)
)

const serviceByCategory = computed(() => {
  const categories = {} as Record<string, number>
  mockServices.forEach(service => {
    categories[service.category] = (categories[service.category] || 0) + service.totalBookings
  })
  return Object.entries(categories).map(([name, value]) => ({ name, value }))
})
</script>

<template>
  <div class="space-y-6">
    <!-- Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm text-gray-600 mb-1">การจองทั้งหมด</div>
            <div class="text-3xl font-bold text-gray-800">{{ totalAppointments }}</div>
          </div>
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm text-gray-600 mb-1">เสร็จสิ้น</div>
            <div class="text-3xl font-bold text-green-600">{{ completedAppointments }}</div>
          </div>
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm text-gray-600 mb-1">รายได้รวม</div>
            <div class="text-2xl font-bold text-indigo-600">{{ (totalRevenue / 1000000).toFixed(2) }}M</div>
          </div>
          <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm text-gray-600 mb-1">ผู้ดูแลพร้อมงาน</div>
            <div class="text-3xl font-bold text-teal-600">{{ activeCaregivers }}/{{ totalCaregivers }}</div>
          </div>
          <div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
      <!-- Top Services -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-6">บริการยอดนิยม (Top 5)</h2>
        <div class="space-y-4">
          <div v-for="(service, index) in topServices" :key="service.id" class="flex items-center gap-4">
            <div class="text-lg font-semibold text-gray-600 w-6">{{ index + 1 }}</div>
            <div class="flex-1">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-medium text-gray-900">{{ service.name }}</span>
                <span class="text-sm text-gray-600">{{ service.totalBookings }} ครั้ง</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-indigo-500 h-2 rounded-full transition-all duration-300"
                  :style="{ width: topServices[0] ? (service.totalBookings / topServices[0].totalBookings * 100) + '%' : '0%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Category Distribution -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-6">การจองตามหมวดหมู่</h2>
        <div class="space-y-4">
          <div v-for="category in serviceByCategory" :key="category.name" class="flex items-center justify-between">
            <div class="flex-1">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-medium text-gray-900">{{ category.name }}</span>
                <span class="text-sm text-gray-600">{{ category.value }} ครั้ง</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-teal-500 h-2 rounded-full transition-all duration-300"
                  :style="{ width: serviceByCategory[0] ? (category.value / serviceByCategory[0].value * 100) + '%' : '0%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Export Section -->
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">ส่งออกรายงาน</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button class="flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 font-semibold py-3 px-6 rounded-lg transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          ส่งออก Excel
        </button>
        <button class="flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-700 font-semibold py-3 px-6 rounded-lg transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          ส่งออก PDF
        </button>
        <button class="flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-3 px-6 rounded-lg transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          ส่งออก CSV
        </button>
      </div>
    </div>
  </div>
</template>
