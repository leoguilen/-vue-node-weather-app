<template>
  <main style="height:100%">
    <v-container fluid>
      <v-alert
        transition="slide-y-reverse-transition"
        v-show="error !== ''"
        type="error"
        >{{ error }}</v-alert
      >
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-card class="ma-3 pa-6" max-width="400" height="100%">
              <v-alert
                transition="slide-y-reverse-transition"
                v-show="alert !== ''"
                type="warning"
                >{{ alert }}</v-alert
              >
              <v-list-item two-line>
                <!-- Card central com os inputs-->
                <v-list-item-content v-show="enableCbox === true">
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
                      v-model="cityObj"
                      v-on:change="cityInfo(cityObj)"
                      :items="cities"
                      hide-selected
                      label="Selecione as cidades desejadas"
                      multiple
                      persistent-hint
                      small-chips
                      :disabled="disableCities"
                    ></v-combobox>

                    <!-- Checklist com os lugares selecionados -->
                    <v-list flat>
                      <v-list-item-group color="primary">
                        <v-list-item
                          v-for="(item, i) in selectedPlaces"
                          :key="i"
                        >
                          <v-list-item-content>
                            <v-list-item-title>
                              {{ item.state }} -
                              {{ item.city }}
                              <a href="#" @click="removeItem(item)">
                                <img
                                  style="float:right;margin-top:3px"
                                  src="../assets/Icons/close.svg"
                                />
                              </a>
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>

                    <!-- Botão para envio das cidades selecionadas -->
                    <v-divider></v-divider>
                    <v-card-actions style="float:right; margin-right: -4px">
                      <v-btn
                        small
                        color="primary"
                        @click="sendPlaces(selectedPlaces)"
                        >Enviar</v-btn
                      >
                    </v-card-actions>
                  </v-card-text>
                </v-list-item-content>

                <!-- Loader -->
                <v-list-item-content v-show="loader === true">
                  <v-img
                    src="../assets/Icons/loader.gif"
                    aspect-ratio="2"
                    contain
                  ></v-img>
                  <p>Carregando, por favor aguarde...</p>
                </v-list-item-content>

                <!-- Card com resultados climáticos -->
                <Results :results="resultsObj" :enable="results" />
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
import WeatherService from "../services/weatherService.js";
import Results from "./Results.vue";
import { isNullOrUndefined } from "util";

export default {
  name: "Places",
  components: {
    Results,
  },
  data: () => {
    return {
      disableCities: true,
      states: [],
      stateSaved: null,
      stateObj: "",
      cities: [],
      cityObj: [],
      selectedPlaces: [],
      error: "",
      alert: "",
      loader: false,
      enableCbox: true,
      results: false,
      resultsObj: [],
    };
  },
  async created() {
    try {
      const states = await StateService.getAll();
      states.forEach((state) =>
        this.states.push({ text: state.stateName, value: state.geoId })
      );
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    showCities: async function(state) {
      if (isNullOrUndefined(state)) {
        this.disableCities = true;
        this.cities = [];
        this.cityObj = "";
        return;
      } else {
        if (!isNullOrUndefined(this.stateSaved))
          if (state.text !== this.stateSaved) {
            this.cities = [];
            this.cityObj = "";
          }
      }

      this.stateSaved = state.text;
      this.disableCities = false;

      try {
        const cities = await CityService.getCitiesByState(state.value);
        cities.forEach((city) =>
          this.cities.push({ text: city.cityName, value: city.geoId })
        );
      } catch (error) {
        this.error = error;
      }
    },
    cityInfo: function(cities) {
      this.selectedPlaces.push({
        state: this.stateObj.text,
        city: cities[cities.length - 1].text,
      });

      this.alert = "";
    },
    removeItem: function(itemCity) {
      let indexCity = this.selectedPlaces.indexOf(itemCity);
      this.selectedPlaces.splice(indexCity, 1);
      this.cityObj.splice(indexCity, 1);
    },
    sendPlaces: function(places) {
      if (places.length === 0) {
        this.alert = "Selecione cidades para continuar!";
        return;
      }

      this.enableCbox = false;
      this.loader = true;

      try {
        places.forEach(async (pl) => {
          const res = await WeatherService.getInfo(pl.city);
          this.resultsObj.push({
            placeName: res.PlaceName,
            mainWeather: res.MainWeather,
            descWeather: res.DescriptionWeather,
            temperature: res.Temperature,
            thermalSensation: res.ThermalSensation,
            minTemp: res.MinTemperature,
            maxTemp: res.MaxTemperature,
            pressure: res.Pressure,
            humidity: res.Humidity,
          });
        });
      } catch (error) {
        this.error = error;
      }

      console.log(this.resultsObj);

      setInterval(() => {
        this.loader = false;
        this.results = true;
      }, 2000);
    },
  },
};
</script>
