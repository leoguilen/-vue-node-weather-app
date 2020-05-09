<template>
  <main>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-card class="ma-3 pa-6" max-width="400">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="headline"
                    >Aqui vai o titulo
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <v-card-text>Aqui vai o combobox de estados </v-card-text>
              <v-card-text>Aqui vai o combobox de cidades </v-card-text>
              <v-card-text
                >Aqui vai o checklist dos lugares selecionados
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                aqui vai o button
              </v-card-actions>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
export default {
  name: 'SelectPlaces',
};
</script>
