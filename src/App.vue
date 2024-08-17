<template>
  <div id="app">
    <Header v-if="$route.meta.requiresAuth"></Header>
    <router-view />
    <Footer v-if="$route.meta.requiresAuth"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>


<style>
</style>
