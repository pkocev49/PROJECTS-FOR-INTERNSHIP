import { createRouter, createWebHistory } from 'vue-router'

const BlogList = () => import('@/pages/blogs/BlogList.vue')
const BlogDetail = () => import('@/pages/blogs/BlogDetail.vue')
const AddBlog = () => import('@/pages/blogs/AddBlog.vue')
const UpdateBlog = () => import('@/pages/blogs/UpdateBlog.vue')
const UserAuth = () => import('@/pages/auth/UserAuth.vue')
const NotFond = () => import('@/pages/NotFound.vue')
import store from './store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/blogs' },
    { path: '/blogs', component: BlogList },
    { path: '/blogs/:id', component: BlogDetail, props: true },
    { path: '/updateBlog/:id', name: 'UpdateBlog', component: UpdateBlog },
    { path: '/addBlog', component: AddBlog, meta: { requiresAuth: true } },
    { path: '/auth', component: UserAuth, meta: { requiresAuth: true } },
    { path: '/:notFound(.*)', component: NotFond }
  ]
})
router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuth && to.path !== '/auth') {
    next('/auth')
  } else {
    next()
  }
})
export default router
