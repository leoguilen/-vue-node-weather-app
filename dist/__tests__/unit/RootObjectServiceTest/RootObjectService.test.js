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
require("reflect-metadata");
const rootObject_service_1 = require("../../../api/rootObject/services/rootObject.service");
const inversify_config_1 = __importDefault(require("../../../config/inversify.config"));
const _rootObjService = inversify_config_1.default.resolve(rootObject_service_1.RootObjectService);
describe('GetListRootObjectModelState method', () => {
    it('Should be returned object list contains brazilian states', () => __awaiter(void 0, void 0, void 0, function* () {
        const rootObjects = yield _rootObjService.GetListRootObjectModelStateAsync();
        expect(rootObjects).not.toBeNull();
        expect(rootObjects).toHaveLength(27);
        expect(rootObjects[0].toponymName).toBe('Acre');
        expect(rootObjects[rootObjects.length - 1].toponymName).toBe('Tocantins');
    }));
});
describe('GetListRootObjectModelCityAsync', () => {
    it('Should be returned object list contains all cities from brazilian states', () => __awaiter(void 0, void 0, void 0, function* () {
        const stateGeoId = '3665474';
        const rootObjects = yield _rootObjService.GetListRootObjectModelCityAsync(stateGeoId);
        expect(rootObjects).not.toBeNull();
        expect(rootObjects).toHaveLength(22);
        expect(rootObjects[0].toponymName).toBe('Acrelândia');
        expect(rootObjects[rootObjects.length - 1].toponymName).toBe('Xapuri');
    }));
});
describe('GetRootObjectWeatherAsync', () => {
    it('Should be returned object contains weather infos from state or city passing by parameter ', () => __awaiter(void 0, void 0, void 0, function* () {
        const cityName = 'Atibaia';
        const rootWeatherObj = yield _rootObjService.GetRootObjectWeatherAsync(cityName);
        expect(rootWeatherObj).not.toBeNull();
        expect(rootWeatherObj).not.toBeUndefined();
        expect(rootWeatherObj).toHaveProperty('coord');
        expect(rootWeatherObj).toHaveProperty('weather');
        expect(rootWeatherObj).toHaveProperty('base');
        expect(rootWeatherObj).toHaveProperty('main');
        expect(rootWeatherObj).toHaveProperty('visibility');
        expect(rootWeatherObj).toHaveProperty('wind');
        expect(rootWeatherObj).toHaveProperty('clouds');
        expect(rootWeatherObj).toHaveProperty('dt');
        expect(rootWeatherObj).toHaveProperty('sys');
        expect(rootWeatherObj).toHaveProperty('coord');
        expect(rootWeatherObj.name).toBe(cityName);
    }));
});
//# sourceMappingURL=RootObjectService.test.js.map