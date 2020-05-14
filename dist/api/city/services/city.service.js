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
require("reflect-metadata");
const inversify_1 = require("inversify");
const rootObject_service_1 = require("../../../api/rootObject/services/rootObject.service");
const string_utils_1 = require("../../../utils/string.utils");
let CityService = class CityService {
    constructor(rootObjectService) {
        this._rootObjectService = rootObjectService;
    }
    GetAllCitiesAsync(stateGeoId) {
        return __awaiter(this, void 0, void 0, function* () {
            let rootObjs = [];
            const cities = [];
            try {
                rootObjs = yield this._rootObjectService.GetListRootObjectModelCityAsync(stateGeoId);
            }
            catch (error) {
                throw Error(error);
            }
            if (rootObjs !== null || rootObjs !== undefined) {
                rootObjs.forEach(el => {
                    const city = {
                        cod: el.adminCode1,
                        geoId: el.geonameId,
                        cityName: el.name,
                        stateName: el.adminName1,
                        stateCode: el.adminCodes1.ISO3166_2,
                        countryName: el.countryName,
                        countryCode: el.countryCode
                    };
                    cities.push(city);
                });
            }
            else {
                throw Error('Array not have any element');
            }
            return cities;
        });
    }
    GetCityByGeoIdAsync(stateGeoId, cityGeoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const cities = yield this.GetAllCitiesAsync(stateGeoId);
            const cityResult = cities.find((city) => city.geoId === cityGeoId);
            if (cityResult === null || cityResult === undefined) {
                throw Error('ERROR (GetCityByGeoId) GeoId inválido. Cidade não encontrada!');
            }
            return cityResult;
        });
    }
    GetCityByNameAsync(stateGeoId, cityName) {
        return __awaiter(this, void 0, void 0, function* () {
            const cities = yield this.GetAllCitiesAsync(stateGeoId);
            cityName = string_utils_1.FormatName(cityName);
            const cityResult = cities.find((city) => city.cityName === cityName);
            if (cityResult === null || cityResult === undefined) {
                throw Error('ERROR (GetCityByNameAsync) Nome inválido. Cidade não encontrada!');
            }
            return cityResult;
        });
    }
};
CityService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(rootObject_service_1.RootObjectService)),
    __metadata("design:paramtypes", [Object])
], CityService);
exports.CityService = CityService;
//# sourceMappingURL=city.service.js.map