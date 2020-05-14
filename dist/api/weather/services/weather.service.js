"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const rootObject_service_1 = require("../../rootObject/services/rootObject.service");
let WeatherService = class WeatherService {
    constructor(rootObjectService) {
        this._rootObjectService = rootObjectService;
    }
    GetWeatherInfosAsync(placeName) {
        return __awaiter(this, void 0, void 0, function* () {
            let rootWeatherObj;
            let weatherResult;
            try {
                rootWeatherObj = yield this._rootObjectService.GetRootObjectWeatherAsync(placeName);
            }
            catch (error) {
                throw Error(error);
            }
            if (rootWeatherObj !== null || rootWeatherObj !== undefined) {
                weatherResult = {
                    PlaceName: rootWeatherObj.name,
                    MainWeather: rootWeatherObj.weather[0].main,
                    DescriptionWeather: rootWeatherObj.weather[0].description,
                    Temperature: rootWeatherObj.main.temp,
                    ThermalSensation: rootWeatherObj.main.feels_like,
                    MinTemperature: rootWeatherObj.main.temp_min,
                    MaxTemperature: rootWeatherObj.main.temp_max,
                    Pressure: rootWeatherObj.main.pressure,
                    Humidity: rootWeatherObj.main.humidity
                };
            }
            else {
                throw Error('Array not have any element');
            }
            return weatherResult;
        });
    }
};
WeatherService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(rootObject_service_1.RootObjectService)),
    __metadata("design:paramtypes", [Object])
], WeatherService);
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map