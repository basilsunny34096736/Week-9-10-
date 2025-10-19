import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Views/HomeView.vue'
import AboutView from '../Views/AboutView.vue'
import FirebaseSigninView from '../Views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../Views/FirebaseRegisterView.vue'
import DashboardView from '../Views/DashboardView.vue'
import AddBookView from '../Views/AddBookView.vue'
import BookManagementView from '../Views/BookManagementView.vue'
import FirebaseFunctionsView from '../Views/FirebaseFunctionsView.vue'
import WeatherView from '../Views/WeatherView.vue'
import ApiView from '../Views/ApiView.vue'
import GetAllBookApiView from '../Views/GetAllBookApiView.vue'
import { simpleAuthService } from '../firebase/simpleAuthService.js'

// Auth check using simple Firebase authentication
const isAuthenticated = () => !!simpleAuthService.getCurrentUser()

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { title: 'About' }
  },
  {
    path: '/register',
    name: 'Register',
    component: FirebaseRegisterView,
    meta: { title: 'Firebase Registration' }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: FirebaseSigninView,
    meta: { title: 'Authentication' }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { title: 'Dashboard' }
  },
  {
    path: '/add-book',
    name: 'AddBook',
    component: AddBookView,
    meta: { title: 'Add Book' }
  },
  {
    path: '/book-management',
    name: 'BookManagement',
    component: BookManagementView,
    meta: { title: 'Book Management' }
  },
  {
    path: '/firebase-functions',
    name: 'FirebaseFunctions',
    component: FirebaseFunctionsView,
    meta: { title: 'Firebase Functions' }
  },
  {
    path: '/weather',
    name: 'Weather',
    component: WeatherView,
    meta: { title: 'Weather API' }
  },
  {
    path: '/api',
    name: 'Api',
    component: ApiView,
    meta: { title: 'API Counters' }
  },
  {
    path: '/get-all-book-api',
    name: 'GetAllBookApi',
    component: GetAllBookApiView,
    meta: { title: 'GetAllBookAPI' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../Views/NotFoundView.vue'),
    meta: { title: 'Not Found' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// global route guard
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ name: 'Home', query: { denied: 'auth', redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router
