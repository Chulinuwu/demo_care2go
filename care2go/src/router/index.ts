import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { requiresAuth: false }
    },
    {
      path: '/',
      component: DashboardLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardView
        },
        {
          path: '/appointments',
          name: 'appointments',
          component: () => import('../views/AppointmentsView.vue')
        },
        {
          path: '/services',
          name: 'services',
          component: () => import('../views/ServicesView.vue')
        },
        {
          path: '/caregivers',
          name: 'caregivers',
          component: () => import('../views/CaregiversView.vue')
        },
        {
          path: '/customers',
          name: 'customers',
          component: () => import('../views/CustomersView.vue')
        },
        {
          path: '/reports',
          name: 'reports',
          component: () => import('../views/ReportsView.vue')
        },
        {
          path: '/finance',
          name: 'finance',
          component: () => import('../views/FinanceView.vue')
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import('../views/SettingsView.vue')
        }
      ]
    }
  ],
})

// Navigation guard - บังคับให้ login ก่อนเข้าทุก route
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  
  // ถ้ายังไม่ login และไม่ได้ไปหน้า login ให้ redirect ไป login
  if (!isAuthenticated && to.path !== '/login') {
    next('/login')
  } 
  // ถ้า login แล้วแต่พยายามเข้าหน้า login ให้ไปหน้า home
  else if (isAuthenticated && to.path === '/login') {
    next('/')
  } 
  // กรณีอื่นๆ ให้ผ่านไปได้
  else {
    next()
  }
})

export default router
