<template>
  <li class="mb-[50px]">
    <span class="mr-[20px] text-white text-1xl border-b-2 border-white"> {{ myDate }}</span>
    <div class="flex-grow">
      <router-link
        :to="blogDetailsLink"
        class="font-bold text-white hover:underline decoration-white text-2xl"
        >{{ title }}</router-link
      >
      <base-button mode="delete" @click="deleteBlog" v-if="isLoggedIn">Delete</base-button>
    </div>
  </li>
</template>
<script>
export default {
  props: ['id', 'title', 'description', 'createdAt'],
  computed: {
    blogDetailsLink() {
      return this.$route.path + '/' + this.id
    },
    isLoggedIn() {
      return this.$store.getters.isAuth
    },
    myDate() {
      return new Date(this.createdAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    }
  },
  methods: {
    async deleteBlog() {
      try {
        this.$store.dispatch('blogs/deleteBlog', this.id)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
