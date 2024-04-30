<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 6px;
  font: inherit;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  border-radius: 10px;

  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: grey;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}
.delete {
  text-decoration: none;
  padding: 6px;
  font: inherit;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  margin-left: 10px;
  display: inline-block;
}

.outline {
  background-color: transparent;
  border-color: transparent;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
