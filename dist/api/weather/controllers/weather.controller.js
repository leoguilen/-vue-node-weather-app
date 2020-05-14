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
const inversify_config_1 = __importDefault(require("../../../config/inversify.config"));
const weather_service_1 = require("../services/weather.service");
const _weatherService = inversify_config_1.default.resolve(weather_service_1.WeatherService);
class WeatherController {
    GetWeatherInfoByPlaceName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const placeName = req.params.place;
            yield _weatherService.GetWeatherInfosAsync(placeName)
                .then((result) => {
                res.status(200);
                res.json(result);
            })
                .catch((error) => {
                res.status(500);
                res.send(`Detalhes do erro: ${error.stack}`);
            });
        });
    }
}
exports.default = new WeatherController();
//# sourceMappingURL=weather.controller.js.map