"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Weather {
    constructor(weather) {
        this.PlaceName = weather.PlaceName;
        this.MainWeather = weather.MainWeather;
        this.DescriptionWeather = weather.DescriptionWeather;
        this.Temperature = weather.Temperature;
        this.ThermalSensation = weather.ThermalSensation;
        this.MinTemperature = weather.MinTemperature;
        this.MaxTemperature = weather.MaxTemperature;
        this.Pressure = weather.Pressure;
        this.Humidity = weather.Humidity;
    }
}
exports.default = Weather;
//# sourceMappingURL=weather.model.js.map