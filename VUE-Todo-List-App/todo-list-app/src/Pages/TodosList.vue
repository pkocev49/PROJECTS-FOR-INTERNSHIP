<template>
  <div v-if="myTodos.length === 0">
    <h3>You are free for the day</h3>
  </div>
  <ul>
    <todo-item v-for="(todo, index) in myTodos" :key="todo.id" :index="index" :id="todo.id" :title="todo.title"
      :isComplete="todo.isComplete">
    </todo-item>
  </ul>
</template>
<script>
import TodoItem from '@/Components/Todos/TodoItem.vue'
export default {
  components: { TodoItem },
  props: ['myTodos']
}
</script>

<style scoped>
h3 {
  margin-top: 40px;
  font-size: 25px;
  text-align: center;
}
</style>