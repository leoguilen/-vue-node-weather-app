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
                  <v-list-item-title class="headline text-center">Informações Climáticas</v-list-item-title>
                  <!-- Combo com os estados -->
                  <v-card-text>
                    <v-combobox
                      v-model="state"
                      v-on:change="showState"
                      :items="states"
                      hide-selected
                      label="Selecione um estado"
                      persistent-hint
                      small-chips
                    ></v-combobox>

                    <!-- Combo com as cidades -->
                    <v-combobox
                      v-model="citiesModel"
                      v-on:change="showCities(`${citiesModel}`)"
                      :items="cities"
                      hide-selected
                      label="Selecione as cidades desejadas"
                      hint="Máximo de 5 cidades"
                      multiple
                      persistent-hint
                      small-chips
                      :disabled="disableCboxCities"
                    ></v-combobox>

                    <!-- Checklist com os lugares selecionados -->
                    <v-list shaped>
                      <v-list-item-group color="primary">
                        <v-list-item v-for="(item, i) in selectedPlaces" :key="i">
                          <v-list-item-content>
                            <v-list-item-title>{{item.state}} - {{item.city}}</v-list-item-title>
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
export default {
  name: "Places",
  data: () => {
    return {
      disableCboxCities: true,
      state: "",
      citiesModel: "",
      citiesSave: "",
      states: ["São Paulo", "Rio de Janeiro", "Minas Gerais"],
      cities: [
        "Atibaia",
        "Bragança Paulista",
        "Jundiai",
        "Campinas",
        "Guarulhos",
        "Santo André"
      ],
      selectedPlaces: []
    };
  },
  methods: {
    showState: function() {
      if (this.state !== null) {
        //this.citiesSave = this.citiesModel; // Tranfere os valores do combobox antes de apagá-los
        this.citiesModel = "";
      }

      if (this.state !== null) this.disableCboxCities = false;
      else this.disableCboxCities = true;
    },
    showCities: function(ct) {
      const ctArr = ct.split(",");

      if (ctArr.length <= 5) {
        if (ctArr.length > this.selectedPlaces.length) {
          if (ct !== null) {
            this.selectedPlaces.push({
              state: this.state,
              city: ctArr[ctArr.length - 1]
            });
          }
        } else {
          this.selectedPlaces.pop();
        }
      }

      console.log(this.selectedPlaces);
    }
  },
  watch: {
    citiesModel(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.citiesModel.pop());
      }
    }
  }
};
</script>
