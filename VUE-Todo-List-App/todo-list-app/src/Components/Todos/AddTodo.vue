<template>
  <section>
    <form @submit.prevent="submitTodo">
      <div>
        <input type="text" placeholder="Going to the gym..." v-model="titleInput" class="todoInput" />
        <base-button type="submit" class="search">Add Todo</base-button>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  inject: ['addTodo'],
  data() {
    return {
      titleInput: ''
    }
  },
  methods: {
    submitTodo() {
      if (this.titleInput === '') {
        return
      }
      this.addTodo(this.titleInput)
      this.titleInput = ''
    }
  }
}
</script>
<style scoped>
.todoInput {
  padding: 10px;
  width: 100%;
  border: 1px solid grey;
  border-radius: 10px;
  margin-bottom: 10px;
}

@media only screen and (min-width: 968px) {
  .todoInput {
    width: 350px;

  }
}
</style>
