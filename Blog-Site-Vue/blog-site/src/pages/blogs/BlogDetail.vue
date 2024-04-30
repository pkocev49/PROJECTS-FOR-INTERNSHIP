<template>
  <section class="w-[700px] mt-[70px]">
    <div v-for="blog in filteredBlogs" :key="blog.id">
      <h1 class="font-bold text-white hover:underline decoration-white text-2xl">
        {{ blog.title }}
      </h1>
      <span class="text-white flex">
        <img
          class="mr-[10px] fill-current"
          src="../../assets/imgs/calendar-alt-svgrepo-com.svg"
          alt="calendar"
        />
        {{
          new Date(blog.createdAt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })
        }}</span
      >
      <h2 class="text-white text-[20px] mt-[40px] mb-[30px]">{{ blog.description }}</h2>
      <router-link
        class="text-white font-bold border border-white border-2 p-2 rounded-[10px]"
        v-if="isLoggedIn"
        :to="{ name: 'UpdateBlog', params: { id: blog.id } }"
        >Update</router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      editMode: false
    }
  },
  computed: {
    filteredBlogs() {
      const blogId = this.$route.params.id
      const blogs = this.$store.getters['blogs/blogs']
      return blogs.filter((blog) => blog.id === blogId)
    },
    isLoggedIn() {
      return this.$store.getters.isAuth
    }
  },
  created() {
    this.loadBlogs()
  },
  methods: {
    async loadBlogs() {
      try {
        await this.$store.dispatch('blogs/getBlogs')
      } catch (error) {
        this.error = error.message || 'Something went wrong!'
      }
    }
  }
}
</script>
