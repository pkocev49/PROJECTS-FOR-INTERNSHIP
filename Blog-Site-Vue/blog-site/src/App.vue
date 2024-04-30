<template>
  <div class="flex flex-col min-h-screen">
    <the-header></the-header>
    <main class="flex-grow flex items-center justify-center">
      <router-view></router-view>
    </main>
    <the-footer class="mt-[500px] flex items-center justify-center"></the-footer>
  </div>
</template>
<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheFooter
  },
  created() {
    this.$store.dispatch('checkLogin')
  }
}
</script>

<style>
html {
  background-color: #363535;
}
</style>
