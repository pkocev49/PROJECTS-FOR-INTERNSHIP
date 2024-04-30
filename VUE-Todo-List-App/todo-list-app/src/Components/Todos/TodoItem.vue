<template>
  <section>
    <base-card>
      <h2>{{ index + 1 }}.{{ title }}</h2>
      <input
        type="checkbox"
        id="compete-todo"
        name="confirm-todo"
        @input="toggleConfirm(id)"
        :checked="isComplete"
      />
      <label>{{ isComplete ? 'Complete' : 'Incomplete' }}</label>
      <base-button @click="deleteTodo(id)" class="delete">Delete</base-button>
    </base-card>
  </section>
</template>
<script>
export default {
  props: ['index', 'id', 'title', 'isComplete'],

  data() {
    return {
      confirm: this.isComplete
    }
  },
  inject: ['deleteTodo', 'toggleConfirm']
}
</script>
