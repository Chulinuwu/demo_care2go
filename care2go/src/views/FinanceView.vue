<script setup lang="ts">
import { mockTransactions, mockMonthlyRevenue } from '@/data'
import { computed } from 'vue'

const totalRevenue = computed(() => 
  mockMonthlyRevenue.reduce((sum, item) => sum + item.amount, 0)
)

const thisMonthRevenue = computed(() => 
  mockMonthlyRevenue[mockMonthlyRevenue.length - 1]?.amount || 0
)

const totalTransactions = computed(() => mockTransactions.length)
</script>

<template>
  <div class="space-y-4 md:space-y-6">
    <!-- Stats Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
      <div class="bg-white rounded-lg shadow p-4 md:p-6">
        <div class="text-xs md:text-sm text-gray-600 mb-2">รายได้รวมทั้งหมด</div>
        <div class="text-2xl md:text-3xl font-bold text-gray-800">{{ totalRevenue.toLocaleString() }} ฿</div>
        <div class="text-xs text-green-600 mt-2">+12.5% จากเดือนที่แล้ว</div>
      </div>
      
      <div class="bg-white rounded-lg shadow p-4 md:p-6">
        <div class="text-xs md:text-sm text-gray-600 mb-2">รายได้เดือนนี้</div>
        <div class="text-2xl md:text-3xl font-bold text-gray-800">{{ thisMonthRevenue.toLocaleString() }} ฿</div>
        <div class="text-xs text-blue-600 mt-2">107 รายการ</div>
      </div>
      
      <div class="bg-white rounded-lg shadow p-4 md:p-6 sm:col-span-2 lg:col-span-1">
        <div class="text-xs md:text-sm text-gray-600 mb-2">ยอดรอชำระ</div>
        <div class="text-2xl md:text-3xl font-bold text-orange-600">45,000 ฿</div>
        <div class="text-xs text-gray-600 mt-2">5 รายการ</div>
      </div>
    </div>

    <!-- Monthly Revenue Chart -->
    <div class="bg-white rounded-lg shadow p-4 md:p-6">
      <h2 class="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">รายได้รายเดือน</h2>
      <div class="overflow-x-auto">
        <div class="min-w-[600px]">
          <div class="flex items-end justify-between h-64 space-x-2 md:space-x-4">
            <div
              v-for="month in mockMonthlyRevenue.slice(-6)"
              :key="month.date"
              class="flex-1 flex flex-col items-center gap-2"
            >
              <div class="relative w-full bg-indigo-500 hover:bg-indigo-600 transition rounded-t-lg cursor-pointer"
                :style="{ height: (month.amount / 800000 * 240) + 'px' }"
                :title="`${month.amount.toLocaleString()} ฿`">
              </div>
              <div class="text-xs md:text-sm text-gray-600">{{ month.date.slice(5) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Transactions -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <div class="p-4 md:p-6 border-b border-gray-200">
        <h2 class="text-lg md:text-xl font-semibold text-gray-800">รายการธุรกรรมล่าสุด</h2>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[800px]">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">รหัส</th>
              <th class="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ลูกค้า</th>
              <th class="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">รายการ</th>
              <th class="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ช่องทาง</th>
              <th class="px-3 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">วันที่</th>
              <th class="px-3 md:px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">จำนวนเงิน</th>
              <th class="px-3 md:px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">สถานะ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="transaction in mockTransactions" :key="transaction.id" class="hover:bg-gray-50">
              <td class="px-3 md:px-4 py-3 text-xs md:text-sm whitespace-nowrap">{{ transaction.id }}</td>
              <td class="px-3 md:px-4 py-3 text-xs md:text-sm whitespace-nowrap">{{ transaction.customerName }}</td>
              <td class="px-3 md:px-4 py-3 text-xs md:text-sm whitespace-nowrap">{{ transaction.description }}</td>
              <td class="px-3 md:px-4 py-3 text-xs md:text-sm whitespace-nowrap">{{ transaction.paymentMethod }}</td>
              <td class="px-3 md:px-4 py-3 text-xs md:text-sm whitespace-nowrap">{{ new Date(transaction.transactionDate).toLocaleDateString('th-TH') }}</td>
              <td class="px-3 md:px-4 py-3 text-xs md:text-sm text-right font-semibold whitespace-nowrap">{{ transaction.amount.toLocaleString() }} ฿</td>
              <td class="px-3 md:px-4 py-3 text-center whitespace-nowrap">
                <span :class="[
                  'px-2 py-1 rounded-full text-xs',
                  transaction.paymentStatus === 'completed' ? 'bg-green-100 text-green-800' : 
                  transaction.paymentStatus === 'pending' ? 'bg-orange-100 text-orange-800' :
                  'bg-red-100 text-red-800'
                ]">
                  {{ transaction.paymentStatus === 'completed' ? 'สำเร็จ' : transaction.paymentStatus === 'pending' ? 'รอดำเนินการ' : 'ไม่สำเร็จ' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
