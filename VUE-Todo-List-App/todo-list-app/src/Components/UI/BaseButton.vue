<template>
  <button :class="type">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: ['type']
}
</script>
<style scoped>
button.delete {
  font: inherit;
  font-size: 12px;
  border: none;
  background-color: rgb(108, 108, 245);
  color: white;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 10px;
}

button.search {
  font: inherit;
  font-size: 12px;
  border: none;
  background-color: rgb(108, 108, 245);
  color: white;
  padding: 11px;
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 30px;
}

@media only screen and (min-width: 968px) {
  button.search {
    width: 20%;
    margin-left: 30px;
  }
}

button:hover,
button:active {
  background-color: blue;
}
</style>
