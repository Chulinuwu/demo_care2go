<script setup lang="ts">
import { ref, computed } from 'vue'
import { mockAppointments } from '@/data'

const searchQuery = ref('')
const filterStatus = ref('all')

const filteredAppointments = computed(() => {
  let filtered = mockAppointments
  
  if (filterStatus.value !== 'all') {
    filtered = filtered.filter(app => app.serviceStatus === filterStatus.value)
  }
  
  if (searchQuery.value) {
    filtered = filtered.filter(app => 
      app.customerName.includes(searchQuery.value) ||
      app.orderNumber.includes(searchQuery.value) ||
      app.caregiverName.includes(searchQuery.value)
    )
  }
  
  return filtered
})

const statusList = [
  { value: 'all', label: 'ทั้งหมด' },
  { value: 'รอยืนยัน', label: 'รอยืนยัน' },
  { value: 'กำลังดำเนินการ', label: 'กำลังดำเนินการ' },
  { value: 'เสร็จสิ้น', label: 'เสร็จสิ้น' },
  { value: 'ยกเลิก', label: 'ยกเลิก' }
]
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="bg-white rounded-lg shadow p-4 md:p-6">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <h2 class="text-xl md:text-2xl font-semibold text-gray-800">จัดการการจอง</h2>
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">
          + เพิ่มการจองใหม่
        </button>
      </div>
      
      <!-- Filters -->
      <div class="flex flex-col sm:flex-row gap-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="ค้นหา (รหัส, ชื่อลูกค้า, ผู้ดูแล)"
          class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <select
          v-model="filterStatus"
          class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option v-for="status in statusList" :key="status.value" :value="status.value">
            {{ status.label }}
          </option>
        </select>
      </div>
    </div>

    <!-- Appointments Table -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full min-w-[1000px]">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">รหัส</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ลูกค้า</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ผู้ดูแล</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">บริการ</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">วันนัดหมาย</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">สถานะ</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ชำระเงิน</th>
              <th class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">จำนวน</th>
              <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">จัดการ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="appointment in filteredAppointments" :key="appointment.id" class="hover:bg-gray-50">
              <td class="px-4 py-3 text-sm text-blue-600 hover:underline cursor-pointer whitespace-nowrap">
                {{ appointment.orderNumber }}
              </td>
              <td class="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{{ appointment.customerName }}</td>
              <td class="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{{ appointment.caregiverName }}</td>
              <td class="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{{ appointment.serviceType }}</td>
              <td class="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{{ appointment.appointmentDate }}</td>
              <td class="px-4 py-3 text-sm whitespace-nowrap">
                <span :class="[
                  'px-2 py-1 rounded-full text-xs',
                  appointment.serviceStatus === 'เสร็จสิ้น' ? 'bg-green-100 text-green-800' :
                  appointment.serviceStatus === 'กำลังดำเนินการ' ? 'bg-blue-100 text-blue-800' :
                  appointment.serviceStatus === 'รอยืนยัน' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                ]">
                  {{ appointment.serviceStatus }}
                </span>
              </td>
              <td class="px-4 py-3 text-sm whitespace-nowrap">
                <span :class="[
                  'px-2 py-1 rounded-full text-xs',
                  appointment.paymentStatus === 'ชำระแล้ว' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                ]">
                  {{ appointment.paymentStatus }}
                </span>
              </td>
              <td class="px-4 py-3 text-sm text-gray-900 text-right whitespace-nowrap">
                {{ appointment.amount.toLocaleString() }} ฿
              </td>
              <td class="px-4 py-3 text-sm text-center whitespace-nowrap">
                <button class="text-indigo-600 hover:text-indigo-800 mx-1">แก้ไข</button>
                <button class="text-red-600 hover:text-red-800 mx-1">ลบ</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
