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
const city_service_1 = require("../../../api/city/services/city.service");
const inversify_config_1 = __importDefault(require("../../../config/inversify.config"));
const _cityService = inversify_config_1.default.resolve(city_service_1.CityService);
describe('GetAllCitiesAsync Method', () => {
    it('should not be returned array null or empty', () => __awaiter(void 0, void 0, void 0, function* () {
        const stateGeoId = '3407762';
        const citiesResult = yield _cityService.GetAllCitiesAsync(stateGeoId);
        expect(citiesResult).not.toBeNull();
        expect(citiesResult.length).toBeGreaterThan(10);
    }));
    it('should contains in the first object the city "Amapá"', () => __awaiter(void 0, void 0, void 0, function* () {
        const stateGeoId = '3407762';
        const expectedFirstCity = {
            cod: '03',
            geoId: 6319493,
            cityName: 'Amapá',
            stateName: 'Amapá',
            stateCode: 'AP',
            countryName: 'Brazil',
            countryCode: 'BR'
        };
        const citiesResult = yield _cityService.GetAllCitiesAsync(stateGeoId);
        expect(citiesResult).toContainEqual(expectedFirstCity);
    }));
    it('should contains in the last object the city "Vitória do Jari"', () => __awaiter(void 0, void 0, void 0, function* () {
        const stateGeoId = '3407762';
        const expectedLastCity = {
            cod: '03',
            geoId: 6319497,
            cityName: 'Vitória do Jari',
            stateName: 'Amapá',
            stateCode: 'AP',
            countryName: 'Brazil',
            countryCode: 'BR'
        };
        const citiesResult = yield _cityService.GetAllCitiesAsync(stateGeoId);
        expect(citiesResult).toContainEqual(expectedLastCity);
    }));
    it('should be throw erro when stateGeoId is invalid', () => __awaiter(void 0, void 0, void 0, function* () {
        const invalidStateGeoId = '1234';
        const citiesResult = yield _cityService
            .GetAllCitiesAsync(invalidStateGeoId)
            .catch((err) => expect(err.message)
            .toBe('Array not have any element'));
    }));
});
describe('GetCityByGeoIdAsync Method', () => {
    const stateGeoId = '3448433';
    const cityGeoId = 6322114;
    it('should not be returned object null or empty', () => __awaiter(void 0, void 0, void 0, function* () {
        const city = _cityService.GetCityByGeoIdAsync(stateGeoId, cityGeoId);
        expect(city).not.toBeNull();
        expect(city).not.toBeUndefined();
    }));
    it('should be returned city by geoId', () => __awaiter(void 0, void 0, void 0, function* () {
        const expectedCity = {
            cod: '27',
            geoId: cityGeoId,
            cityName: 'Atibaia',
            stateName: 'São Paulo',
            stateCode: 'SP',
            countryName: 'Brazil',
            countryCode: 'BR'
        };
        const city = yield _cityService.GetCityByGeoIdAsync(stateGeoId, cityGeoId);
        expect(city).toEqual(expectedCity);
    }));
    it('should be throw new error when geoId not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const invalidGeoId = 1234;
        const cityResult = yield _cityService
            .GetCityByGeoIdAsync(stateGeoId, invalidGeoId)
            .catch((ex) => expect(ex.message)
            .toBe('ERROR (GetCityByGeoId) GeoId inválido. Cidade não encontrada!'));
    }));
});
describe('GetCityByNameAsync Method', () => {
    const stateGeoId = '3448433';
    const cityName = 'Bragança Paulista';
    it('should not be returned object null or empty', () => __awaiter(void 0, void 0, void 0, function* () {
        const city = _cityService.GetCityByNameAsync(stateGeoId, cityName);
        expect(city).not.toBeNull();
        expect(city).not.toBeUndefined();
    }));
    it('should be returned city by geoId', () => __awaiter(void 0, void 0, void 0, function* () {
        const expectedCity = {
            cod: '27',
            geoId: 6322152,
            cityName: cityName,
            stateName: 'São Paulo',
            stateCode: 'SP',
            countryName: 'Brazil',
            countryCode: 'BR'
        };
        const city = yield _cityService.GetCityByNameAsync(stateGeoId, cityName);
        expect(city).toEqual(expectedCity);
    }));
    it('should be throw new error when geoId not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const invalidName = 'cidade invalida';
        const cityResult = yield _cityService
            .GetCityByNameAsync(stateGeoId, invalidName)
            .catch((ex) => expect(ex.message)
            .toBe('ERROR (GetCityByNameAsync) Nome inválido. Cidade não encontrada!'));
    }));
});
//# sourceMappingURL=CityService.test.js.map