<template>
  <base-card>
    <update-blog-form @save-data="saveData"></update-blog-form>
  </base-card>
</template>

<script>
import UpdateBlogForm from '../../components/blogs/UpdateBlogForm.vue'

export default {
  components: {
    UpdateBlogForm
  },
  methods: {
    async saveData(data) {
      try {
        const id = this.$route.params.id
        await this.$store.dispatch('blogs/updateBlog', { id, newData: data })
        this.$router.replace('/blogs')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
