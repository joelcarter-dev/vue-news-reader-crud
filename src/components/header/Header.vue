<template>
  <nav>
    <ul>
      <li><router-link v-bind:to="'/'">Home</router-link></li>
      <li><router-link v-bind:to="'/about'">About</router-link></li>
      <li><router-link v-bind:to="'/signup'">Sign Up</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
    name: "MyHeader"
}
</script>

<style scoped>
  .router-link-exact-active {
    font-weight: bold;
  }
</style>