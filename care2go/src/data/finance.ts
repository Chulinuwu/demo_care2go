export interface Transaction {
  id: string
  appointmentId: string
  customerName: string
  amount: number
  paymentMethod: string
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded'
  transactionDate: string
  description: string
}

export interface Revenue {
  date: string
  amount: number
  bookings: number
}

export const mockTransactions: Transaction[] = [
  {
    id: 'TXN-001',
    appointmentId: 'PT-5845',
    customerName: 'ศรวัฒน์ จันทร์เพ็ญ',
    amount: 3000,
    paymentMethod: 'โอนเงิน',
    paymentStatus: 'completed',
    transactionDate: '2025-10-05T10:00:59',
    description: 'ชำระค่าบริการพยาบาล'
  },
  {
    id: 'TXN-002',
    appointmentId: 'PT-5624',
    customerName: 'ชูธรรม วงศ์ดี',
    amount: 5240,
    paymentMethod: 'บัตรเครดิต',
    paymentStatus: 'pending',
    transactionDate: '2025-10-05T08:56:22',
    description: 'ชำระค่าบริการดูแลผู้ป่วย'
  },
  {
    id: 'TXN-003',
    appointmentId: 'CN-5621',
    customerName: 'ธนกาลีพิมพ์ สุขใจ',
    amount: 6555,
    paymentMethod: 'เงินสด',
    paymentStatus: 'completed',
    transactionDate: '2025-10-05T08:20:56',
    description: 'ชำระค่าบริการดูแลพิเศษ'
  }
]

export const mockMonthlyRevenue: Revenue[] = [
  { date: '2025-01', amount: 450000, bookings: 150 },
  { date: '2025-02', amount: 520000, bookings: 173 },
  { date: '2025-03', amount: 480000, bookings: 160 },
  { date: '2025-04', amount: 610000, bookings: 203 },
  { date: '2025-05', amount: 580000, bookings: 193 },
  { date: '2025-06', amount: 670000, bookings: 223 },
  { date: '2025-07', amount: 720000, bookings: 240 },
  { date: '2025-08', amount: 690000, bookings: 230 },
  { date: '2025-09', amount: 750000, bookings: 250 },
  { date: '2025-10', amount: 320000, bookings: 107 }
]
