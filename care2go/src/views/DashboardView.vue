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
    <div class="bg-white rounded-lg shadow p-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold text-gray-800">จำนวนการจอง</h2>
        <div class="flex space-x-2">
          <button class="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">บริการ</button>
          <button class="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">1 เดือน</button>
          <button class="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">เริ่ม</button>
          <button class="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">สิ้นสุด</button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
        <!-- Total Card -->
        <div class="lg:col-span-2 bg-indigo-900 text-white rounded-lg p-6">
          <div class="text-5xl font-bold mb-2">{{ mockDashboardStats.total }}</div>
          <div class="text-sm">ทั้งหมด</div>
          <div class="mt-2 text-xs text-green-300">{{ mockDashboardStats.percentageChange.total }}</div>
        </div>

        <!-- Stat Cards -->
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
        >
          <div class="text-xs text-gray-600 mb-1">{{ stat.label }}</div>
          <div class="text-3xl font-bold text-gray-800 mb-1">{{ stat.value }}</div>
          <div :class="['text-xs', stat.percentage.startsWith('+') ? 'text-green-600' : 'text-red-600']">
            {{ stat.percentage }}
          </div>
        </div>
      </div>
    </div>

    <!-- Two Column Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Recent Appointments -->
      <div class="lg:col-span-2 bg-white rounded-lg shadow">
        <div class="p-6 border-b border-gray-200">
          <h2 class="text-xl font-semibold text-gray-800">รายการ 10 อันดับแรก</h2>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ลำดับ</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">เวลา</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">รหัส</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">วันที่</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ลูกค้า</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ผู้ดูแล</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">สถานะ</th>
                <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">จำนวน</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="(appointment, index) in recentAppointments" :key="appointment.id" class="hover:bg-gray-50">
                <td class="px-6 py-4 text-sm text-gray-900">{{ index + 1 }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ appointment.time }}</td>
                <td class="px-6 py-4 text-sm text-blue-600 hover:underline cursor-pointer">{{ appointment.orderNumber }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ appointment.date }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ appointment.customerName }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ appointment.caregiverName }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ appointment.serviceStatus }}</td>
                <td class="px-6 py-4 text-sm text-gray-900 text-right">{{ appointment.amount }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Top Services -->
      <div class="bg-white rounded-lg shadow">
        <div class="p-6 border-b border-gray-200">
          <h2 class="text-xl font-semibold text-gray-800">5 อันดับยอดใช้งานได้สูงสุด</h2>
        </div>
        <div class="p-6 space-y-4">
          <div
            v-for="service in mockTopServices"
            :key="service.rank"
            class="flex items-center space-x-4"
          >
            <div class="text-lg font-semibold text-gray-600 w-6">{{ service.rank }}</div>
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <span class="text-sm font-medium text-gray-900">{{ service.name }}</span>
                <span class="text-sm text-gray-600">{{ service.score }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-teal-500 h-2 rounded-full transition-all duration-300"
                  :style="{ width: service.percentage + '%' }"
                ></div>
              </div>
            </div>
            <div class="text-lg font-semibold text-gray-900">{{ service.percentage }}%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional styles if needed */
</style>
