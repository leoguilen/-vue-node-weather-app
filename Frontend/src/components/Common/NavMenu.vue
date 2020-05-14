<template>
  <header>
    <v-app-bar color="#1867C0" elevate-on-scroll>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row align="center" justify="space-around">
              <!-- Logo do projeto -->
              <div class="ma-3 pa-6">
                <v-img
                  :src="require('@/assets/logo-nome-app.png')"
                  aspect-ratio="1.7"
                  height="400px"
                  width="300px"
                  alt="Weather App Logo"
                  style="margin-bottom: 5px"
                ></v-img>
              </div>

              <!-- Div para cobrir o meio e criar um espaçamento no header -->
              <div class="ma-3 pa-6"></div>

              <!-- Botão para abrir repo do projeto -->
              <div class="ma-3 pa-6">
                <v-btn class="ma-2 text-center" color="#FAFAFA" :href="projectSrc" target="_blank">
                  <strong style="color: #1B69C1; letter-spacing: 0.06em;">Go to Code</strong>
                  <img
                    :src="require('@/assets/Icons/github-blue.svg')"
                    height="25px"
                    width="25px"
                    style="margin-left:0.8em;margin-bottom:0.07em"
                  />
                </v-btn>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </header>
</template>

<script>
export default {
  name: "NavMenu",
  data: () => {
    return {
      projectSrc: "https://github.com/leoguilen/vue-node-weather-app"
    };
  }
};
</script>
