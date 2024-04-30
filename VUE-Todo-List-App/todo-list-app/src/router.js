import { createRouter, createWebHistory } from 'vue-router'
import CompletedTodos from './Pages/CompletedTodos.vue'
import TheTodos from './Pages/TheTodos.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: TheTodos },
    {
      path: '/completed-todos',
      name: 'CompletedTodos',
      component: CompletedTodos
    }
  ]
})

export default router
