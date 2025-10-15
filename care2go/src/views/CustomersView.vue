<script setup lang="ts">
import { mockCustomers } from '@/data'
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="bg-white rounded-lg shadow p-4 md:p-6">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 class="text-xl md:text-2xl font-semibold text-gray-800">จัดการผู้ใช้บริการ</h2>
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">
          + เพิ่มผู้ใช้บริการใหม่
        </button>
      </div>
    </div>

    <!-- Customers Table -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full min-w-[900px]">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ชื่อ</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">อายุ</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">โทร</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ที่อยู่</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">จำนวนการจอง</th>
              <th class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">ยอดรวม</th>
              <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">สถานะ</th>
              <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">จัดการ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="customer in mockCustomers" :key="customer.id" class="hover:bg-gray-50">
              <td class="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{{ customer.name }}</td>
              <td class="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{{ customer.age }} ปี</td>
              <td class="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{{ customer.phone }}</td>
              <td class="px-4 py-3 text-sm text-gray-900">
                <div class="max-w-xs truncate">{{ customer.district }}, {{ customer.province }}</div>
              </td>
              <td class="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{{ customer.totalBookings }} ครั้ง</td>
              <td class="px-4 py-3 text-sm text-gray-900 text-right whitespace-nowrap">
                {{ customer.totalSpent.toLocaleString() }} ฿
              </td>
              <td class="px-4 py-3 text-sm text-center whitespace-nowrap">
                <span :class="[
                  'px-2 py-1 rounded-full text-xs',
                  customer.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                ]">
                  {{ customer.status === 'active' ? 'ใช้งาน' : 'ไม่ใช้งาน' }}
                </span>
              </td>
              <td class="px-4 py-3 text-sm text-center whitespace-nowrap">
                <button class="text-indigo-600 hover:text-indigo-800 mx-1">ดู</button>
                <button class="text-blue-600 hover:text-blue-800 mx-1">แก้ไข</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
