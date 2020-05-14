"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const rootObject_service_1 = require("../api/rootObject/services/rootObject.service");
const state_service_1 = require("../api/state/services/state.service");
const city_service_1 = require("../api/city/services/city.service");
const weather_service_1 = require("../api/weather/services/weather.service");
const DIContainer = new inversify_1.Container();
DIContainer.bind(rootObject_service_1.RootObjectService).to(rootObject_service_1.RootObjectService).inSingletonScope();
DIContainer.bind(weather_service_1.WeatherService).to(weather_service_1.WeatherService).inSingletonScope();
DIContainer.bind(state_service_1.StateService).to(state_service_1.StateService).inSingletonScope();
DIContainer.bind(city_service_1.CityService).to(city_service_1.CityService).inSingletonScope();
exports.default = DIContainer;
//# sourceMappingURL=inversify.config.js.map