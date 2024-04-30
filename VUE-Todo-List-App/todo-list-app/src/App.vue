<template>

  <the-navigation></the-navigation>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import TheNavigation from './Components/Layouts/TheNavigation.vue'
export default {
  components: {
    TheNavigation
  },
}
</script>

<style>
* {
  font-family: sans-serif;
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: rgb(222, 215, 215);
}
</style>
