export interface Appointment {
  id: string
  orderNumber: string
  time: string
  date: string
  serviceType: string
  customerName: string
  customerPhone: string
  caregiverName: string
  caregiverPhone: string
  address: string
  district: string
  province: string
  paymentStatus: string
  serviceStatus: string
  appointmentDate: string
  appointmentTime: string
  amount: number
  createdAt: string
}

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    orderNumber: 'PT-5845',
    time: '10:00:59',
    date: '10/05/68 11:00:00',
    serviceType: 'พยาบาล',
    customerName: 'ศรวัฒน์',
    customerPhone: '0800000000',
    caregiverName: 'นภาพร',
    caregiverPhone: '0800000000',
    address: 'เกาะเตย',
    district: 'บางรัก',
    province: 'กรุงเทพ',
    paymentStatus: 'ชำระแล้ว',
    serviceStatus: 'เสร็จสิ้น',
    appointmentDate: '19/05/68',
    appointmentTime: '13:25:00',
    amount: 3000,
    createdAt: '2025-10-05T10:00:59'
  },
  {
    id: '2',
    orderNumber: 'PT-5624',
    time: '8:56:22',
    date: '10/05/68 11:00:00',
    serviceType: 'กฤษฎา',
    customerName: 'ชูธรรม',
    customerPhone: '0800000000',
    caregiverName: 'สุภาพร',
    caregiverPhone: '0800000000',
    address: 'ทุกสอย',
    district: 'เจริญกรุง',
    province: 'กรุงเทพ',
    paymentStatus: 'รอชำระ',
    serviceStatus: 'กำลังดำเนินการ',
    appointmentDate: '19/05/68',
    appointmentTime: '13:25:00',
    amount: 5240,
    createdAt: '2025-10-05T08:56:22'
  },
  {
    id: '3',
    orderNumber: 'CN-5621',
    time: '8:20:56',
    date: '10/05/68 11:00:00',
    serviceType: 'วงพล',
    customerName: 'ธนกาลีพิมพ์',
    customerPhone: '0800000000',
    caregiverName: 'จุฑา',
    caregiverPhone: '0800000000',
    address: 'วีศอเฮา',
    district: 'พญาไท',
    province: 'กรุงเทพ',
    paymentStatus: 'ชำระแล้ว',
    serviceStatus: 'เสร็จสิ้น',
    appointmentDate: '19/05/68',
    appointmentTime: '13:25:00',
    amount: 6555,
    createdAt: '2025-10-05T08:20:56'
  },
  {
    id: '4',
    orderNumber: 'CN-5462',
    time: '7:56:23',
    date: '10/05/68 11:00:00',
    serviceType: 'งานต',
    customerName: 'ธันวา',
    customerPhone: '0800000000',
    caregiverName: 'วรรณา',
    caregiverPhone: '0800000000',
    address: 'วีรถา',
    district: 'ดุสิต',
    province: 'กรุงเทพ',
    paymentStatus: 'ชำระแล้ว',
    serviceStatus: 'รอยืนยัน',
    appointmentDate: '19/05/68',
    appointmentTime: '13:25:00',
    amount: 3000,
    createdAt: '2025-10-05T07:56:23'
  },
  {
    id: '5',
    orderNumber: 'CN-8651',
    time: '6:48:41',
    date: '10/05/68 11:00:00',
    serviceType: 'บริหา',
    customerName: 'ไอพงศ์',
    customerPhone: '0800000000',
    caregiverName: 'นุชนาถ',
    caregiverPhone: '0800000000',
    address: 'ร้อนเหนือ',
    district: 'บางกอกใหญ่',
    province: 'กรุงเทพ',
    paymentStatus: 'ชำระแล้ว',
    serviceStatus: 'เสร็จสิ้น',
    appointmentDate: '19/05/68',
    appointmentTime: '13:25:00',
    amount: 2000,
    createdAt: '2025-10-05T06:48:41'
  },
  {
    id: '6',
    orderNumber: 'CN-5972',
    time: '2:23:28',
    date: '10/05/68 11:00:00',
    serviceType: 'คนเก',
    customerName: 'ศรชัย',
    customerPhone: '0800000000',
    caregiverName: 'แม่งานล่วม',
    caregiverPhone: '0800000000',
    address: 'ปฏิญา',
    district: 'สาทร',
    province: 'กรุงเทพ',
    paymentStatus: 'รอชำระ',
    serviceStatus: 'ยกเลิก',
    appointmentDate: '19/05/68',
    appointmentTime: '13:25:00',
    amount: 1000,
    createdAt: '2025-10-05T02:23:28'
  },
  {
    id: '7',
    orderNumber: 'PT-2456',
    time: '2:14:23',
    date: '10/05/68 11:00:00',
    serviceType: 'ริทพธ',
    customerName: 'กอยปี',
    customerPhone: '0800000000',
    caregiverName: 'ไฮป์',
    caregiverPhone: '0800000000',
    address: 'อะริอร',
    district: 'บางกอกน้อย',
    province: 'กรุงเทพ',
    paymentStatus: 'ชำระแล้ว',
    serviceStatus: 'กำลังดำเนินการ',
    appointmentDate: '19/05/68',
    appointmentTime: '13:25:00',
    amount: 500,
    createdAt: '2025-10-05T02:14:23'
  },
  {
    id: '8',
    orderNumber: 'CN-6544',
    time: '1:49:57',
    date: '10/05/68 11:00:00',
    serviceType: 'กวเกอ',
    customerName: 'แลงงอง',
    customerPhone: '0800000000',
    caregiverName: 'พวียย',
    caregiverPhone: '0800000000',
    address: 'ฟริพงย์',
    district: 'ราชเทวี',
    province: 'กรุงเทพ',
    paymentStatus: 'ชำระแล้ว',
    serviceStatus: 'เสร็จสิ้น',
    appointmentDate: '19/05/68',
    appointmentTime: '13:25:00',
    amount: 1230,
    createdAt: '2025-10-05T01:49:57'
  },
  {
    id: '9',
    orderNumber: 'CN-5666',
    time: '1:12:58',
    date: '10/05/68 11:00:00',
    serviceType: 'ซุ้มนา',
    customerName: 'วัฒนการ',
    customerPhone: '0800000000',
    caregiverName: 'จันทรูปกี',
    caregiverPhone: '0800000000',
    address: 'ฮุคทิช',
    district: 'บางกอกใหญ่',
    province: 'กรุงเทพ',
    paymentStatus: 'รอชำระ',
    serviceStatus: 'รอยืนยัน',
    appointmentDate: '19/05/68',
    appointmentTime: '13:25:00',
    amount: 2566,
    createdAt: '2025-10-05T01:12:58'
  },
  {
    id: '10',
    orderNumber: 'PT-5456',
    time: '00:36:55',
    date: '10/05/68 11:00:00',
    serviceType: 'ฆราวธ',
    customerName: 'เจ็งดี',
    customerPhone: '0800000000',
    caregiverName: 'พกไทรมัน',
    caregiverPhone: '0800000000',
    address: 'ธนิกาน',
    district: 'บางกอกน้อย',
    province: 'กรุงเทพ',
    paymentStatus: 'ชำระแล้ว',
    serviceStatus: 'เสร็จสิ้น',
    appointmentDate: '19/05/68',
    appointmentTime: '13:25:00',
    amount: 2555,
    createdAt: '2025-10-05T00:36:55'
  }
]
