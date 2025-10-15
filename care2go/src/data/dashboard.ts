export interface DashboardStats {
  total: number
  pending: number
  confirmed: number
  cancelled: number
  waitingPayment: number
  inProgress: number
  completed: number
  percentageChange: {
    total: string
    pending: string
    confirmed: string
    cancelled: string
    waitingPayment: string
    inProgress: string
    completed: string
  }
}

export interface TopService {
  rank: number
  name: string
  percentage: number
  score: string
  totalBookings: number
  revenue: number
}

export const mockDashboardStats: DashboardStats = {
  total: 107,
  pending: 24,
  confirmed: 50,
  cancelled: 1,
  waitingPayment: 50,
  inProgress: 30,
  completed: 1,
  percentageChange: {
    total: '+2.5%',
    pending: '+5.2%',
    confirmed: '+3.1%',
    cancelled: '-1.2%',
    waitingPayment: '+2.5%',
    inProgress: '+1.8%',
    completed: '+0.5%'
  }
}

export const mockTopServices: TopService[] = [
  {
    rank: 1,
    name: 'WELCOME',
    percentage: 85,
    score: '85/100',
    totalBookings: 850,
    revenue: 1275000
  },
  {
    rank: 2,
    name: 'KBANK',
    percentage: 58,
    score: '58/100',
    totalBookings: 580,
    revenue: 1740000
  },
  {
    rank: 3,
    name: 'SUMMER',
    percentage: 47,
    score: '47/100',
    totalBookings: 470,
    revenue: 2115000
  },
  {
    rank: 4,
    name: 'FIRSTCHOICE',
    percentage: 40,
    score: '80/200',
    totalBookings: 400,
    revenue: 800000
  },
  {
    rank: 5,
    name: 'SUMMER',
    percentage: 39,
    score: '39/100',
    totalBookings: 390,
    revenue: 3120000
  }
]
