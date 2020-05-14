<template>
  <v-footer color="#212121" padless absolute>
    <v-row justify="center" no-gutters>
      <!-- Logo do app -->
      <v-col class="py-3 text-center white--text" cols="2">
        <img
          :src="require('@/assets/logo-app.png')"
          height="50px"
          width="50px"
          alt="Weather App Logo"
        />
      </v-col>

      <!-- Social Media Icons -->
      <v-col class="py-1 text-center white--text" cols="12">
        <a v-bind:href="instaLink" target="_blank" style="padding: 12px">
          <img :src="require('@/assets/Icons/insta.svg')" />
        </a>
        <a v-bind:href="githubLink" target="_blank" style="padding: 12px">
          <img :src="require('@/assets/Icons/github.svg')" />
        </a>
        <a v-bind:href="linkedinLink" target="_blank" style="padding: 12px">
          <img :src="require('@/assets/Icons/linkedin.svg')" />
        </a>
      </v-col>

      <!-- Informação de versão e copyright -->
      <v-col
        class="py-4 text-center white--text"
        cols="12"
        style="font-size:12px;letter-spacing:2.5px"
      >Copyright © {{ new Date().getFullYear() }} LCG, BR</v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => {
    return {
      instaLink: "https://www.instagram.com/leocruzg_/",
      linkedinLink: "https://www.linkedin.com/in/leonardo-cruz-guilen/",
      githubLink: "https://github.com/leoguilen"
    };
  }
};
</script>
