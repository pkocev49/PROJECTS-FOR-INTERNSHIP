<template>
  <header class="text-3xl flex items-base justify-between mt-[20px] p-[10px]">
    <h1 class="font-bold text-white">
      <router-link to="/">Kocev Pavel</router-link>
    </h1>
    <ul class="flex">
      <li class="mr-[20px] text-white" v-if="isLoggedIn">
        <router-link to="/addBlog">Add Blog</router-link>
      </li>
      <li class="mr-[20px]" v-if="isLoggedIn">
        <button class="text-white" @click="logout">Logout</button>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuth
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.replace('/blogs')
    }
  }
}
</script>
