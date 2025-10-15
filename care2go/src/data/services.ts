export interface Service {
  id: string
  name: string
  description: string
  category: string
  duration: number // in hours
  price: number
  isActive: boolean
  icon: string
  requirements: string[]
  totalBookings: number
}

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'WELCOME',
    description: 'บริการดูแลผู้สูงอายุเบื้องต้น',
    category: 'ดูแลทั่วไป',
    duration: 4,
    price: 1500,
    isActive: true,
    icon: 'home',
    requirements: ['ไม่ติดเตียง', 'ช่วยเหลือตัวเองได้บ้าง'],
    totalBookings: 850
  },
  {
    id: '2',
    name: 'KBANK',
    description: 'บริการพยาบาลวิชาชีพ',
    category: 'พยาบาล',
    duration: 8,
    price: 3000,
    isActive: true,
    icon: 'medical',
    requirements: ['ต้องการดูแลทางการแพทย์', 'มีใบสั่งยา'],
    totalBookings: 580
  },
  {
    id: '3',
    name: 'SUMMER',
    description: 'บริการดูแลผู้ป่วยติดเตียง',
    category: 'ดูแลผู้ป่วย',
    duration: 12,
    price: 4500,
    isActive: true,
    icon: 'bed',
    requirements: ['ผู้ป่วยติดเตียง', 'ต้องการดูแลตลอด 24 ชม.'],
    totalBookings: 470
  },
  {
    id: '4',
    name: 'FIRSTCHOICE',
    description: 'บริการกายภาพบำบัด',
    category: 'กายภาพ',
    duration: 2,
    price: 2000,
    isActive: true,
    icon: 'therapy',
    requirements: ['ต้องการฟื้นฟูสมรรถภาพ', 'มีใบรับรองแพทย์'],
    totalBookings: 400
  },
  {
    id: '5',
    name: 'SUMMER PLUS',
    description: 'บริการดูแลพิเศษ 24 ชั่วโมง',
    category: 'ดูแลพิเศษ',
    duration: 24,
    price: 8000,
    isActive: true,
    icon: 'clock',
    requirements: ['ต้องการดูแลตลอดเวลา', 'มีอาการพิเศษ'],
    totalBookings: 390
  },
  {
    id: '6',
    name: 'นวดบำบัด',
    description: 'บริการนวดเพื่อสุขภาพ',
    category: 'บำบัด',
    duration: 2,
    price: 1000,
    isActive: true,
    icon: 'massage',
    requirements: ['ไม่มีโรคประจำตัวร้ายแรง'],
    totalBookings: 250
  },
  {
    id: '7',
    name: 'ดูแลเด็ก',
    description: 'บริการดูแลเด็กและผู้สูงอายุ',
    category: 'ดูแลเด็ก',
    duration: 6,
    price: 2500,
    isActive: true,
    icon: 'child',
    requirements: ['เด็กอายุ 0-12 ปี หรือ ผู้สูงอายุ'],
    totalBookings: 180
  },
  {
    id: '8',
    name: 'ทำความสะอาด',
    description: 'บริการทำความสะอาดบ้าน',
    category: 'ดูแลบ้าน',
    duration: 4,
    price: 1200,
    isActive: true,
    icon: 'clean',
    requirements: ['พื้นที่ไม่เกิน 100 ตร.ม.'],
    totalBookings: 120
  }
]
