<template>
  <section>
    <h2>Completed Todos</h2>
    <ul v-for="(todo, index) in myTodos" :key="todo.id">
      <base-card>
        <li>{{ index + 1 }}.{{ todo.title }}</li>
        <li>Date:{{ showDate(todo.date) }}</li>
      </base-card>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      myTodos: []
    }
  },

  methods: {
    // Method to format the date
    showDate(date) {
      // Return the formatted date string
      return new Date(date).toLocaleDateString()
    }
  },
  mounted() {
    try {
      const storedTodos = JSON.parse(localStorage.getItem('todos'))
      if (storedTodos) {
        const completedTodos = storedTodos.filter((todo) => todo.isComplete)

        this.myTodos = completedTodos
      }
    } catch (error) {
      console.error('Error parsing todos from localStorage:', error)
    }
  }
}
</script>

<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

li {
  list-style: none;
}
</style>
