import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import LoginView from '../views/LoginView.vue'
import AdminLoginView from '../views/AdminLoginView.vue'
import HomeView from '../views/HomeView.vue'
import BookView from '../views/BookView.vue'
import CartView from '../views/CartView.vue'
import LibraryView from '../views/LibraryView.vue'
import NotificationView from '../views/NotificationView.vue'
import AdminHomeView from '../views/AdminHomeView.vue'
import LoanRequestView from '../views/LoanRequestView.vue'
import LoanExtensionView from '../views/LoanExtensionView.vue'
import ReportsView from '../views/ReportsView.vue'
import AdminBooksView from '../views/AdminBooksView.vue'
import ViewAdminsView from '../views/ViewAdminsView.vue'
import UsersView from '../views/UsersView.vue'
import ReturnsView from '../views/ReturnsView.vue'
import AdminNotificationView from '../views/AdminNotificationView.vue'
import BorrowFormView from '../views/BorrowFormView.vue'
import AddAdminView from '../views/AddAdminView.vue'
import AddBookView from '../views/AddBookView.vue'
import AddUserView from '../views/AddUserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: WelcomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView,
    },
    {
      path: '/admin-login',
      name: 'admin_login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AdminLoginView,
    },

    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: HomeView,
    },

    {
      path: '/book',
      name: 'book',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: BookView,
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CartView,
    },

    {
      path: '/library',
      name: 'lib',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LibraryView,
    },

    {
      path: '/notification',
      name: 'notification',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: NotificationView,
    },

    {
      path: '/borrow-form',
      name: 'borrow_form',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: BorrowFormView,
      // props: (route) => ({ book: route.params.book })
    },

    {
      path: '/admin-home',
      name: 'admin_home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AdminHomeView,
    },

    {
      path: '/loan-request',
      name: 'loan_request',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoanRequestView,
    },

    {
      path: '/loan-extension-request',
      name: 'loan_extension',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoanExtensionView,
    },

    {
      path: '/reports',
      name: 'reports',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ReportsView,
    },

    {
      path: '/admin-books',
      name: 'admin_books',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AdminBooksView,
    },

    {
      path: '/view-admins',
      name: 'view_admins',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ViewAdminsView,
    },

    {
      path: '/users',
      name: 'users',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: UsersView,
    },

    {
      path: '/returns',
      name: 'returns',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ReturnsView,
    },

    {
      path: '/admin-notification',
      name: 'admin_notification',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AdminNotificationView,
    },
    {
      path: '/add-book',
      name: 'add_book',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AddBookView,
    },
    {
      path: '/add-user',
      name: 'add_user',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AddUserView,
    },
    {
      path: '/add-admin',
      name: 'add_admin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AddAdminView,
    }
  ]
})

export default router
