<template>
  <main>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-card class="ma-3 pa-6" max-width="400">
              <!-- Card central com os inputs-->
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="headline text-center"
                    >Informações Climáticas</v-list-item-title
                  >
                  <!-- Combo com os estados -->
                  <v-card-text>
                    <v-combobox
                      v-model="stateObj"
                      v-on:change="showCities(stateObj)"
                      :items="states"
                      hide-selected
                      label="Selecione um estado"
                      persistent-hint
                      small-chips
                    ></v-combobox>

                    <!-- Combo com as cidades -->
                    <v-combobox
                      v-model="selectedCities"
                      v-on:change="showCities(`${selectedCities}`)"
                      :items="cities"
                      hide-selected
                      label="Selecione as cidades desejadas"
                      hint="Máximo de 5 cidades"
                      multiple
                      persistent-hint
                      small-chips
                      :disabled="disableCities"
                    ></v-combobox>

                    <!-- Checklist com os lugares selecionados -->
                    <v-list shaped>
                      <v-list-item-group color="primary">
                        <v-list-item
                          v-for="(item, i) in selectedPlaces"
                          :key="i"
                        >
                          <v-list-item-content>
                            <v-list-item-title
                              >{{ item.state }} -
                              {{ item.city }}</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>

                    <!-- Botão para envio das cidades selecionadas -->
                    <v-divider></v-divider>
                    <v-card-actions style="float:right; margin-right: -4px">
                      <v-btn small color="primary">Enviar</v-btn>
                    </v-card-actions>
                  </v-card-text>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import StateService from "../services/statesService.js";
import CityService from "../services/citiesService.js";

export default {
  name: "Places",
  data: () => {
    return {
      disableCities: false,
      states: [],
      stateObj: "",
      cities: [],
      selectedCities: [],
      selectedPlaces: [],
    };
  },
  async created() {
    const states = await StateService.getAll();
    states.forEach((state) =>
      this.states.push({ text: state.stateName, value: state.geoId })
    );
  },
  methods: {
    showCities: (state) => {
      const cities = CityService.getCitiesByState(state.value).then((res) => {
        return res;
      });

      // cities.forEach((city) =>
      //   this.cities.push({ text: city.cityName, value: city.geoId })
      // );
      console.log(cities);
    },
  },
};
</script>
