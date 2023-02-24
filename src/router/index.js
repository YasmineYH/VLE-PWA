import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/WelcomeView.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: HomeView
  },
  {
    path: '/chooseview',
    name: 'chooseview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ChooseView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/studentdashboard',
    name: 'studentdashboard',
    component: () => import('../views/StudentDashboardView.vue')
  },
  {
    path: '/studentclassroom',
    name: 'studentclassroom',
    component: () => import('../views/StudentClassroomView.vue')
  },
  {
    path: '/studentlibrary',
    name: 'studentlibrary',
    component: () => import('../views/StudentLibraryView.vue')
  },
  {
    path: '/studentassignments',
    name: 'studentassignments',
    component: () => import('../views/StudentAssignmentsView.vue')
  },
  {
    path: '/studentnotifications',
    name: 'studentnotifications',
    component: () => import('../views/StudentNotificationsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router