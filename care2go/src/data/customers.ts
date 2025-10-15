export interface Customer {
  id: string
  name: string
  phone: string
  email: string
  age: number
  gender: string
  address: string
  district: string
  province: string
  registeredDate: string
  totalBookings: number
  totalSpent: number
  status: 'active' | 'inactive'
  emergencyContact: {
    name: string
    phone: string
    relation: string
  }
  medicalConditions: string[]
  preferredCaregivers: string[]
}

export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'ศรวัฒน์ จันทร์เพ็ญ',
    phone: '0812345678',
    email: 'sorawat@example.com',
    age: 72,
    gender: 'male',
    address: 'เกาะเตย',
    district: 'บางรัก',
    province: 'กรุงเทพ',
    registeredDate: '2024-01-10',
    totalBookings: 15,
    totalSpent: 45000,
    status: 'active',
    emergencyContact: {
      name: 'สมชาย จันทร์เพ็ญ',
      phone: '0898765432',
      relation: 'ลูกชาย'
    },
    medicalConditions: ['เบาหวาน', 'ความดันโลหิตสูง'],
    preferredCaregivers: ['1', '2']
  },
  {
    id: '2',
    name: 'ชูธรรม วงศ์ดี',
    phone: '0823456789',
    email: 'chutam@example.com',
    age: 68,
    gender: 'female',
    address: 'ทุกสอย',
    district: 'เจริญกรุง',
    province: 'กรุงเทพ',
    registeredDate: '2024-02-15',
    totalBookings: 12,
    totalSpent: 62880,
    status: 'active',
    emergencyContact: {
      name: 'สมหญิง วงศ์ดี',
      phone: '0887654321',
      relation: 'ลูกสาว'
    },
    medicalConditions: ['โรคหัวใจ', 'ข้อเข่าเสื่อม'],
    preferredCaregivers: ['2', '3']
  },
  {
    id: '3',
    name: 'ธนกาลีพิมพ์ สุขใจ',
    phone: '0834567890',
    email: 'tanakarn@example.com',
    age: 75,
    gender: 'male',
    address: 'วีศอเฮา',
    district: 'พญาไท',
    province: 'กรุงเทพ',
    registeredDate: '2023-11-20',
    totalBookings: 20,
    totalSpent: 131100,
    status: 'active',
    emergencyContact: {
      name: 'วิไล สุขใจ',
      phone: '0876543210',
      relation: 'ภรรยา'
    },
    medicalConditions: ['อัลไซเมอร์', 'เบาหวาน'],
    preferredCaregivers: ['1', '4']
  },
  {
    id: '4',
    name: 'ธันวา ศรีสุข',
    phone: '0845678901',
    email: 'tanwa@example.com',
    age: 70,
    gender: 'male',
    address: 'วีรถา',
    district: 'ดุสิต',
    province: 'กรุงเทพ',
    registeredDate: '2024-03-05',
    totalBookings: 8,
    totalSpent: 24000,
    status: 'active',
    emergencyContact: {
      name: 'ประนอม ศรีสุข',
      phone: '0865432109',
      relation: 'ภรรยา'
    },
    medicalConditions: ['ความดันโลหิตสูง'],
    preferredCaregivers: ['4', '5']
  },
  {
    id: '5',
    name: 'ไอพงศ์ มั่งมี',
    phone: '0856789012',
    email: 'aipong@example.com',
    age: 65,
    gender: 'male',
    address: 'ร้อนเหนือ',
    district: 'บางกอกใหญ่',
    province: 'กรุงเทพ',
    registeredDate: '2024-04-12',
    totalBookings: 10,
    totalSpent: 20000,
    status: 'active',
    emergencyContact: {
      name: 'สมศรี มั่งมี',
      phone: '0854321098',
      relation: 'ภรรยา'
    },
    medicalConditions: ['โรคไต'],
    preferredCaregivers: ['5']
  }
]
