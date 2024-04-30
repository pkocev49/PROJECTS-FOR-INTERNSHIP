<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <h3 class="text-center text-2xl mb-[20px] text-white">
        Please Login with the correct email and password
      </h3>
      <div>
        <input type="email" placeholder="Email" v-model.trim="email" className="myInput" />
      </div>
      <div>
        <input type="password" placeholder="Password" v-model.trim="password" className="myInput" />
      </div>
      <p class="text-red-500" v-if="error">{{ error }}</p>
      <base-button>Login</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async submitForm() {
      const actionPayload = {
        email: this.email,
        password: this.password
      }

      try {
        await this.$store.dispatch('login', actionPayload)
        this.$router.replace('/blogs')
      } catch (error) {
        this.error = error.message || 'Failed to authenticate, try later.'
      }
    }
  }
}
</script>
