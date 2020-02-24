<template>
  <div>
    <h1>Articles</h1>
    <NewsList />
  </div>
</template>

<script>
import NewsList from "./NewsList";


export default {
  name: "Home",
  components: {
    NewsList
  }
};
</script>

<style scoped>
</style>