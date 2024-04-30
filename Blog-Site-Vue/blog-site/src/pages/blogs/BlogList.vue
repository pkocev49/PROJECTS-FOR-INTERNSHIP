<template>
  <section>
    <div class="p-[20px] mt-[30px] mb-[50px]">
      <h1 class="text-center text-5xl text-white">Welcome to my blog</h1>
    </div>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <ul v-if="hasBlogs">
      <blog-item
        v-for="blog in blogs"
        :key="blog.id"
        :id="blog.id"
        :title="blog.title"
        :description="blog.description"
        :createdAt="blog.createdAt"
      ></blog-item>
    </ul>
    <h3 class="text-center text-2xl text-white" v-else>No blogs found...</h3>
  </section>
</template>

<script>
import BlogItem from '../../components/blogs/BlogItem.vue'
export default {
  components: {
    BlogItem
  },
  data() {
    return {
      error: null,
      isLoading: false
    }
  },
  computed: {
    blogs() {
      return this.$store.getters['blogs/blogs']
    },
    hasBlogs() {
      return !this.isLoading && this.$store.getters['blogs/hasBlogs']
    }
  },
  created() {
    this.loadBlogs()
  },
  methods: {
    async loadBlogs() {
      this.isLoading = true
      try {
        await this.$store.dispatch('blogs/getBlogs')
      } catch (error) {
        this.error = error.message || 'Something went wrong!!!'
      }
      this.isLoading = false
    }
  }
}
</script>
