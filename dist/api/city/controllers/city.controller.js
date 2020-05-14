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
const city_service_1 = require("../services/city.service");
const _cityService = inversify_config_1.default.resolve(city_service_1.CityService);
class CityController {
    getAllByStateId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const stateGeoId = req.params.id;
            yield _cityService.GetAllCitiesAsync(stateGeoId)
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
    getbyGeoId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const stateGeoId = req.query.stateId;
            const cityGeoId = req.query.cityId;
            yield _cityService.GetCityByGeoIdAsync(stateGeoId, parseInt(cityGeoId))
                .then((result) => {
                res.status(200);
                res.json(result);
            })
                .catch((error) => {
                res.sendStatus(404);
                console.log(error);
            });
        });
    }
    getbyName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const stateGeoId = req.query.stateId;
            const cityName = req.query.cityName;
            yield _cityService.GetCityByNameAsync(stateGeoId, cityName)
                .then((result) => {
                res.status(200);
                res.json(result);
            })
                .catch((error) => {
                res.sendStatus(404);
                console.log(error);
            });
        });
    }
}
exports.default = new CityController();
//# sourceMappingURL=city.controller.js.map