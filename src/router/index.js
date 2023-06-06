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
    component: () => import('../views/studentViews/StudentDashboardView.vue')
  },
  {
    path: '/studentclassroom',
    name: 'studentclassroom',
    component: () => import('../views/studentViews/StudentClassroomView.vue')
  },
  {
    path: '/studentlibrary/coursematerials',
    name: 'studentlibraryCM',
    component: () => import('../views/studentViews/StudentLibraryCMView.vue')
  },
  {
    path: '/studentlibrary/recordedclasses',
    name: 'studentlibraryRC',
    component: () => import('../views/studentViews/StudentLibraryRCView.vue')
  },
  {
    path: '/studentassignments/pendingsubmissions',
    name: 'studentassignmentsPS',
    component: () => import('../views/studentViews/StudentAssignmentsPSView.vue')
  },
  {
    path: '/studentassignments/recentlysubmitted',
    name: 'studentassignmentsRS',
    component: () => import('../views/studentViews/StudentAssignmentsRSView.vue')
  },
  {
    path: '/studentnotifications',
    name: 'studentnotifications',
    component: () => import('../views/studentViews/StudentNotificationsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router