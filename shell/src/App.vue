<template>
  <div class="app-wrapper">
    <h1>This is shell app</h1>
    <Navbar />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: {
    Navbar: defineAsyncComponent(() => import('navbar/Navbar.vue')),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-wrapper {
  border-style: solid;
}
</style>
