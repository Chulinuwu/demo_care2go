<script setup lang="ts">
import { mockCustomers } from '@/data'
</script>

<template>
  <div class="space-y-4 md:space-y-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4">
      <h1 class="text-xl md:text-2xl font-bold text-gray-800">ลูกค้าทั้งหมด</h1>
      <button class="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg transition text-sm md:text-base">
        + เพิ่มลูกค้าใหม่
      </button>
    </div>

    <!-- Customers Table -->
    <div class="bg-white rounded-lg shadow">
      <div class="p-4 md:p-6 border-b border-gray-200">
        <input
          type="text"
          placeholder="ค้นหาลูกค้า..."
          class="w-full px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm md:text-base"
        />
      </div>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[800px]">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-3 md:px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ชื่อ-นามสกุล</th>
              <th class="px-3 md:px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">อายุ</th>
              <th class="px-3 md:px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">เบอร์โทร</th>
              <th class="px-3 md:px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ที่อยู่</th>
              <th class="px-3 md:px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">วันที่สมัคร</th>
              <th class="px-3 md:px-4 lg:px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">การจอง</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="customer in mockCustomers" :key="customer.id" class="hover:bg-gray-50">
              <td class="px-3 md:px-4 lg:px-6 py-3 md:py-4">
                <div class="flex items-center gap-2 md:gap-3">
                  <div class="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-white text-xs md:text-sm font-bold">{{ customer.name.charAt(0) }}</span>
                  </div>
                  <span class="font-medium text-gray-900 text-xs md:text-sm lg:text-base">{{ customer.name }}</span>
                </div>
              </td>
              <td class="px-3 md:px-4 lg:px-6 py-3 md:py-4 text-xs md:text-sm whitespace-nowrap">{{ customer.age }} ปี</td>
              <td class="px-3 md:px-4 lg:px-6 py-3 md:py-4 text-xs md:text-sm whitespace-nowrap">{{ customer.phone }}</td>
              <td class="px-3 md:px-4 lg:px-6 py-3 md:py-4 text-xs md:text-sm">
                <div class="max-w-[150px] md:max-w-[200px] truncate">{{ customer.address }}</div>
              </td>
              <td class="px-3 md:px-4 lg:px-6 py-3 md:py-4 text-xs md:text-sm whitespace-nowrap">{{ customer.registeredDate }}</td>
              <td class="px-3 md:px-4 lg:px-6 py-3 md:py-4 text-center whitespace-nowrap">
                <span class="inline-block bg-indigo-100 text-indigo-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                  {{ customer.totalBookings }} ครั้ง
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
