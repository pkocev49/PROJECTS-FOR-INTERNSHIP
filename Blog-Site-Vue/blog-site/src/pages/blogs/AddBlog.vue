<template>
  <base-card>
    <blog-form @save-data="saveData"></blog-form>
  </base-card>
</template>

<script>
import BlogForm from '../../components/blogs/BlogForm.vue'

export default {
  components: {
    BlogForm
  },
  methods: {
    async saveData(data) {
      try {
        await this.$store.dispatch('blogs/addBlog', data)
        this.$router.replace('/blogs')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
