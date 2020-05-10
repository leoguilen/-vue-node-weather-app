<template>
  <v-app>
    <NavMenu />
    <Places />
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Common/Footer.vue";
import NavMenu from "./components/Common/NavMenu.vue";
import Places from "./components/Places.vue";

export default {
  name: "App",

  components: {
    NavMenu,
    Places,
    Footer
  },

  data: () => ({
    //
  })
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Questrial");

#app {
  font-family: "Questrial";
}
</style>
