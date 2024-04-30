<template>
  <form @submit.prevent="submitData">
    <div class="">
      <input
        class="myInput"
        type="text"
        id="title"
        v-model.trim="title.val"
        placeholder="Title"
        @blur="clearValidity('title')"
      />
      <p class="mb-[20px] text-red-500 font-bold" v-if="!title.isValid">Title must not be empty.</p>
    </div>
    <div>
      <textarea
        className="myTextArea"
        id="title"
        v-model.trim="description.val"
        rows="5"
        placeholder="Description"
        @blur="clearValidity('description')"
      ></textarea>
      <p class="mb-[20px] text-red-500 font-bold" v-if="!description.isValid">
        Description must not be empty.
      </p>
    </div>
    <base-button>Save</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      title: {
        val: '',
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      formIsValid: true
    }
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true
    },
    validateForm() {
      this.formIsValid = true
      if (this.title.val === '') {
        this.title.isValid = false
        this.formIsValid = false
      }
      if (this.description.val === '') {
        this.description.isValid = false
        this.formIsValid = false
      }
    },

    submitData() {
      this.validateForm()

      if (!this.formIsValid) {
        return
      }

      const formData = {
        title: this.title.val,
        description: this.description.val
      }
      console.log(formData, 'form data')
      this.$emit('save-data', formData)
    }
  }
}
</script>
