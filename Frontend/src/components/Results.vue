<template>
  <v-list-item-content v-show="enable === true">
    <v-card v-for="item in results" :key="item" class="mx-auto" max-width="400">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="headline">{{item.placeName}}</v-list-item-title>
          <v-list-item-subtitle>{{shortDate}}, {{item.descWeather}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-text>
        <v-row align="center">
          <v-col class="display-3" cols="7">{{Math.round(item.temperature)}}&deg;C</v-col>
          <v-col cols="5">
            <v-img
              :src="require(`@/assets/weather/${item.mainWeather}.svg`)"
              alt="Sunny image"
              width="80"
            ></v-img>
          </v-col>
        </v-row>
      </v-card-text>

      <v-list-item>
        <v-row align="center">
          <v-col class="text-center">
            <v-list-item-title>
              <p>
                Max:
                <span style="font-size: 25px; margin-left: 3px">{{item.maxTemp}}°</span>
              </p>
            </v-list-item-title>
            <v-list-item-title>
              <p>
                Min:
                <span style="font-size: 25px; margin-left: 6px">{{item.minTemp}}°</span>
              </p>
            </v-list-item-title>
          </v-col>
          <v-col>
            <v-list-item-title>
              <v-row>
                <v-col cols="5" style="margin-right: -20px">
                  <v-img
                    :src="require('@/assets/weather/humidity.svg')"
                    alt="Humidity image"
                    width="35"
                  ></v-img>
                </v-col>
                <v-col cols="7">
                  Humidity
                  <h3>{{item.humidity}}%</h3>
                </v-col>
              </v-row>
            </v-list-item-title>

            <v-list-item-title>
              <v-row>
                <v-col cols="5" style="margin-right: -20px">
                  <v-img
                    :src="require('@/assets/weather/pressure.svg')"
                    alt="Pressure image"
                    width="35"
                  ></v-img>
                </v-col>
                <v-col cols="7">
                  Pressure
                  <h4>{{item.pressure}} hPa</h4>
                </v-col>
              </v-row>
            </v-list-item-title>

            <v-list-item-title>
              <v-row>
                <v-col cols="5" style="margin-right: -22px">
                  <v-img
                    :src="require('@/assets/weather/thermo.svg')"
                    alt="Thermal sensation image"
                    width="35"
                  ></v-img>
                </v-col>
                <v-col cols="8">
                  Thermal S.
                  <h3>{{Math.round(item.thermalSensation)}}°</h3>
                </v-col>
              </v-row>
            </v-list-item-title>
          </v-col>
        </v-row>
      </v-list-item>
    </v-card>
  </v-list-item-content>
</template>

<script>
export default {
  name: "Results",
  props: ["results", "enable"],
  date: () => {
    return {
      shortDate: ""
    };
  },
  async created() {
    const today = new Date();
    this.shortDate = today.toLocaleDateString("en-US", {
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
};
</script>
