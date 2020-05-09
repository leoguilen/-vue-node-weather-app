<template>
  <v-app>
    <NavMenu />
    <SelectPlaces />
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Common/Footer.vue';
import NavMenu from './components/Common/NavMenu.vue';
import SelectPlaces from './components/SelectPlaces.vue';

export default {
  name: 'App',

  components: {
    NavMenu,
    SelectPlaces,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Questrial');

#app {
  font-family: 'Questrial';
}
</style>
