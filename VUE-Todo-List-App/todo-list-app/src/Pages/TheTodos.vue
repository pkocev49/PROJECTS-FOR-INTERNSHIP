<template>
  <section class="todoSection">
    <div class="mainDiv">
      <div>
        <h2>Add your Todo's for this day</h2>
        <p v-if="showSelectedDate">Todo's for:{{ showSelectedDate }}</p>
        <add-todo></add-todo>
      </div>
      <div class="scrollable">
        <todos-list :myTodos="filteredTodos"></todos-list>
      </div>
    </div>
    <div class="datePicker">
      <VueDatePicker v-model="VueDatePickerstoredDate"></VueDatePicker>
    </div>
  </section>
</template>
<script>
import AddTodo from '@/Components/Todos/AddTodo.vue'
import TodosList from './TodosList.vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
export default {
  components: {
    AddTodo,
    TodosList,
    VueDatePicker
  },
  data() {
    return {
      todos: [],
      storedDate: new Date().toISOString()
    }
  },

  provide() {
    return {
      deleteTodo: this.deleteTodo,
      addTodo: this.addTodo,
      toggleConfirm: this.toggleConfirm
    }
  },
  computed: {
    filteredTodos() {
      // Return a new array of todos filtered based on the selected date
      return this.todos.filter((todo) => {
        // Iterate over each todo in the todos array
        // Convert the date of the current todo to a localized string format (MM/DD/YYYY)
        const todoDate = new Date(todo.date).toLocaleDateString()

        // Convert the selected date to a localized string format (MM/DD/YYYY)
        const selectedDate = new Date(this.storedDate).toLocaleDateString()

        // Check if the date of the current todo matches the selected date
        return todoDate === selectedDate
      })
    },
    showSelectedDate() {
      if (!this.storedDate) return ''
      const date = new Date(this.storedDate)
      return date.toLocaleDateString('en-US')
    }
  },
  mounted() {
    try {
      const storedTodos = JSON.parse(localStorage.getItem('todos'))
      console.log(storedTodos)
      if (storedTodos) {
        this.todos = storedTodos
      }
    } catch (error) {
      console.error('Error parsing todos from localStorage:', error)
    }
  },
  methods: {
    updateTodos(updatedTodos) {
      this.todos = updatedTodos
      localStorage.setItem('todos', JSON.stringify(updatedTodos))
    },
    addTodo(title) {
      const newTodo = {
        id: new Date().toISOString(),
        title: title,
        isComplete: false,
        date: this.storedDate
      }
      this.updateTodos([...this.todos, newTodo])
    },
    toggleConfirm(todoId) {
      const updatedTodos = this.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        }
        return todo
      })
      this.updateTodos(updatedTodos)
    },

    deleteTodo(todoId) {
      const updatedTodos = this.todos.filter((todo) => todo.id !== todoId)
      this.updateTodos(updatedTodos)
    }
  }
}
</script>
<style scoped>
.todoSection {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  margin-top: 100px;
}

@media only screen and (min-width: 968px) {
  .todoSection {
    flex-direction: row-reverse;
    justify-content: space-evenly;
  }

  .mainDiv {
    width: 600px;
  }
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

p {
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 20px;
}

/* Add scroll bar to the main div */
.scrollable {
  overflow-y: auto;
  /* Add vertical scrollbar when content exceeds container height */
  max-height: 400px;
  /* Adjust max-height as needed */
}

/* Custom scrollbar design */
.scrollable::-webkit-scrollbar {
  width: 12px;
}

.scrollable::-webkit-scrollbar-track {
  background: blue;
}

.scrollable::-webkit-scrollbar-thumb {
  background: rgb(63, 186, 227);
}

.scrollable::-webkit-scrollbar-thumb:hover {
  background: rgb(63, 186, 227);
}
</style>
