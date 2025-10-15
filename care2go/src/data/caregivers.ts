export interface Caregiver {
  id: string
  name: string
  phone: string
  email: string
  age: number
  gender: string
  specialization: string[]
  experience: number
  rating: number
  status: 'active' | 'inactive' | 'busy'
  certifications: string[]
  address: string
  district: string
  province: string
  joinedDate: string
  totalJobs: number
}

export const mockCaregivers: Caregiver[] = [
  {
    id: '1',
    name: 'นภาพร สุขสันต์',
    phone: '0812345678',
    email: 'napaporn@care2go.com',
    age: 35,
    gender: 'female',
    specialization: ['พยาบาล', 'ดูแลผู้สูงอายุ'],
    experience: 10,
    rating: 4.8,
    status: 'active',
    certifications: ['ใบประกอบวิชาชีพการพยาบาล', 'CPR'],
    address: 'บางรัก',
    district: 'บางรัก',
    province: 'กรุงเทพ',
    joinedDate: '2023-01-15',
    totalJobs: 156
  },
  {
    id: '2',
    name: 'สุภาพร วงศ์ใหญ่',
    phone: '0823456789',
    email: 'supaporn@care2go.com',
    age: 42,
    gender: 'female',
    specialization: ['ดูแลผู้ป่วย', 'กายภาพบำบัด'],
    experience: 15,
    rating: 4.9,
    status: 'busy',
    certifications: ['นักกายภาพบำบัด', 'CPR'],
    address: 'เจริญกรุง',
    district: 'บางรัก',
    province: 'กรุงเทพ',
    joinedDate: '2022-08-20',
    totalJobs: 203
  },
  {
    id: '3',
    name: 'จุฑา ศรีสวัสดิ์',
    phone: '0834567890',
    email: 'juta@care2go.com',
    age: 28,
    gender: 'female',
    specialization: ['ดูแลเด็ก', 'ดูแลผู้สูงอายุ'],
    experience: 5,
    rating: 4.6,
    status: 'active',
    certifications: ['ผู้ดูแลเด็ก', 'ปฐมพยาบาล'],
    address: 'พญาไท',
    district: 'พญาไท',
    province: 'กรุงเทพ',
    joinedDate: '2024-03-10',
    totalJobs: 87
  },
  {
    id: '4',
    name: 'วรรณา มั่นคง',
    phone: '0845678901',
    email: 'wanna@care2go.com',
    age: 38,
    gender: 'female',
    specialization: ['พยาบาล', 'ดูแลผู้ป่วยติดเตียง'],
    experience: 12,
    rating: 4.7,
    status: 'active',
    certifications: ['ใบประกอบวิชาชีพการพยาบาล', 'Wound Care'],
    address: 'ดุสิต',
    district: 'ดุสิต',
    province: 'กรุงเทพ',
    joinedDate: '2023-06-05',
    totalJobs: 145
  },
  {
    id: '5',
    name: 'นุชนาถ แสงสว่าง',
    phone: '0856789012',
    email: 'nuchanat@care2go.com',
    age: 31,
    gender: 'female',
    specialization: ['นวดบำบัด', 'ดูแลผู้สูงอายุ'],
    experience: 8,
    rating: 4.5,
    status: 'active',
    certifications: ['นวดไทย', 'นวดเพื่อสุขภาพ'],
    address: 'บางกอกใหญ่',
    district: 'บางกอกใหญ่',
    province: 'กรุงเทพ',
    joinedDate: '2023-11-20',
    totalJobs: 98
  }
]
