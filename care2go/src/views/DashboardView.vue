<script setup lang="ts">
import { computed } from 'vue'
import { mockDashboardStats, mockTopServices, mockAppointments } from '@/data'

const stats = computed(() => [
  { 
    label: 'รอยืนยัน', 
    value: mockDashboardStats.pending.toString(), 
    percentage: mockDashboardStats.percentageChange.pending 
  },
  { 
    label: 'รอชำระเงิน', 
    value: mockDashboardStats.waitingPayment.toString(), 
    percentage: mockDashboardStats.percentageChange.waitingPayment 
  },
  { 
    label: 'ยกเลิก', 
    value: mockDashboardStats.cancelled.toString(), 
    percentage: mockDashboardStats.percentageChange.cancelled 
  },
  { 
    label: 'ยืนยันแล้ว', 
    value: mockDashboardStats.confirmed.toString(), 
    percentage: mockDashboardStats.percentageChange.confirmed 
  },
  { 
    label: 'กำลังดำเนินการ', 
    value: mockDashboardStats.inProgress.toString(), 
    percentage: mockDashboardStats.percentageChange.inProgress 
  },
  { 
    label: 'สิ้นสุด', 
    value: mockDashboardStats.completed.toString(), 
    percentage: mockDashboardStats.percentageChange.completed 
  }
])

const recentAppointments = computed(() => mockAppointments.slice(0, 10))
</script>

<template>
  <div class="space-y-6">
    <!-- Stats Overview -->
    <div class="bg-white rounded-lg shadow p-4 md:p-6">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <h2 class="text-lg md:text-xl font-semibold text-gray-800">จำนวนการจอง</h2>
        <div class="flex flex-wrap gap-2">
          <button class="px-3 py-1.5 text-xs md:text-sm border border-gray-300 rounded-lg hover:bg-gray-50">บริการ</button>
          <button class="px-3 py-1.5 text-xs md:text-sm border border-gray-300 rounded-lg hover:bg-gray-50">1 เดือน</button>
          <button class="px-3 py-1.5 text-xs md:text-sm border border-gray-300 rounded-lg hover:bg-gray-50">เริ่ม</button>
          <button class="px-3 py-1.5 text-xs md:text-sm border border-gray-300 rounded-lg hover:bg-gray-50">สิ้นสุด</button>
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
        <!-- Total Card -->
        <div class="sm:col-span-2 lg:col-span-2 bg-indigo-900 text-white rounded-lg p-4 md:p-6">
          <div class="text-3xl md:text-5xl font-bold mb-2">{{ mockDashboardStats.total }}</div>
          <div class="text-xs md:text-sm">ทั้งหมด</div>
          <div class="mt-2 text-xs text-green-300">{{ mockDashboardStats.percentageChange.total }}</div>
        </div>

        <!-- Stat Cards -->
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-white border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-md transition"
        >
          <div class="text-xs text-gray-600 mb-1 truncate">{{ stat.label }}</div>
          <div class="text-2xl md:text-3xl font-bold text-gray-800 mb-1">{{ stat.value }}</div>
          <div :class="['text-xs', stat.percentage.startsWith('+') ? 'text-green-600' : 'text-red-600']">
            {{ stat.percentage }}
          </div>
        </div>
      </div>
    </div>

    <!-- Two Column Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
      <!-- Recent Appointments -->
      <div class="lg:col-span-2 bg-white rounded-lg shadow overflow-hidden">
        <div class="p-4 md:p-6 border-b border-gray-200">
          <h2 class="text-lg md:text-xl font-semibold text-gray-800">รายการ 10 อันดับแรก</h2>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full min-w-[800px]">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap">#</th>
                <th class="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap">เวลา</th>
                <th class="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap">รหัส</th>
                <th class="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap">วันที่</th>
                <th class="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap">ลูกค้า</th>
                <th class="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap">ผู้ดูแล</th>
                <th class="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap">สถานะ</th>
                <th class="px-3 md:px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase whitespace-nowrap">จำนวน</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="(appointment, index) in recentAppointments" :key="appointment.id" class="hover:bg-gray-50">
                <td class="px-3 md:px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{{ index + 1 }}</td>
                <td class="px-3 md:px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{{ appointment.time }}</td>
                <td class="px-3 md:px-4 py-3 text-sm text-blue-600 hover:underline cursor-pointer whitespace-nowrap">{{ appointment.orderNumber }}</td>
                <td class="px-3 md:px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{{ appointment.date }}</td>
                <td class="px-3 md:px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{{ appointment.customerName }}</td>
                <td class="px-3 md:px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{{ appointment.caregiverName }}</td>
                <td class="px-3 md:px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{{ appointment.serviceStatus }}</td>
                <td class="px-3 md:px-4 py-3 text-sm text-gray-900 text-right whitespace-nowrap">{{ appointment.amount.toLocaleString() }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Top Services -->
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="p-4 md:p-6 border-b border-gray-200">
          <h2 class="text-lg md:text-xl font-semibold text-gray-800">5 อันดับยอดใช้งาน</h2>
        </div>
        <div class="p-4 md:p-6 space-y-4">
          <div
            v-for="service in mockTopServices"
            :key="service.rank"
            class="flex items-center gap-2 md:gap-4"
          >
            <div class="text-base md:text-lg font-semibold text-gray-600 w-6 flex-shrink-0">{{ service.rank }}</div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between mb-1 gap-2">
                <span class="text-xs md:text-sm font-medium text-gray-900 truncate">{{ service.name }}</span>
                <span class="text-xs md:text-sm text-gray-600 whitespace-nowrap">{{ service.score }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-teal-500 h-2 rounded-full transition-all duration-300"
                  :style="{ width: service.percentage + '%' }"
                ></div>
              </div>
            </div>
            <div class="text-base md:text-lg font-semibold text-gray-900 whitespace-nowrap">{{ service.percentage }}%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional styles if needed */
</style>
