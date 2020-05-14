"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_service_1 = require("../../../api/weather/services/weather.service");
const inversify_config_1 = __importDefault(require("../../../config/inversify.config"));
const _weatherService = inversify_config_1.default.resolve(weather_service_1.WeatherService);
describe('GetWeatherInfosAsync', () => {
    it('Should be not returned null or empty', () => __awaiter(void 0, void 0, void 0, function* () {
        const placeName = 'Atibaia';
        const weatherObjResult = yield _weatherService.GetWeatherInfosAsync(placeName);
        expect(weatherObjResult).not.toBeNull();
        expect(weatherObjResult).not.toBeUndefined();
    }));
    it('Should be returned object contained weather infos in state or city passed in params', () => __awaiter(void 0, void 0, void 0, function* () {
        const placeName = 'Atibaia';
        const weatherObjResult = yield _weatherService.GetWeatherInfosAsync(placeName);
        expect(weatherObjResult).toHaveProperty('MainWeather');
        expect(weatherObjResult).toHaveProperty('DescriptionWeather');
        expect(weatherObjResult).toHaveProperty('Temperature');
        expect(weatherObjResult).toHaveProperty('ThermalSensation');
        expect(weatherObjResult).toHaveProperty('MinTemperature');
        expect(weatherObjResult).toHaveProperty('MaxTemperature');
        expect(weatherObjResult).toHaveProperty('Pressure');
        expect(weatherObjResult).toHaveProperty('Humidity');
    }));
});
//# sourceMappingURL=weatherService.test.js.map