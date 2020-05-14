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
const state_service_1 = require("../../../api/state/services/state.service");
const inversify_config_1 = __importDefault(require("../../../config/inversify.config"));
const _stateService = inversify_config_1.default.resolve(state_service_1.StateService);
describe('GetAllStateAsync Method', () => {
    it('should not be returned array null or empty', () => __awaiter(void 0, void 0, void 0, function* () {
        let statesResult = [];
        statesResult = yield _stateService.GetAllStatesAsync();
        expect(statesResult).not.toBeNull();
        expect(statesResult).toHaveLength(27);
    }));
    it('should be valid the first state Acre', () => __awaiter(void 0, void 0, void 0, function* () {
        let statesResult = [];
        const expectedFirstState = {
            cod: '01',
            geoId: 3665474,
            stateName: 'Acre',
            stateCode: 'AC',
            countryName: 'Brazil',
            countryCode: 'BR'
        };
        statesResult = yield _stateService.GetAllStatesAsync();
        expect(statesResult).toContainEqual(expectedFirstState);
    }));
});
describe('GetStateByGeoIdAsync Method', () => {
    const validGeoId = 3448433;
    it('should not be returned object null or empty ', () => __awaiter(void 0, void 0, void 0, function* () {
        const state = yield _stateService.GetStateByGeoIdAsync(validGeoId);
        expect(state).not.toBeNull();
        expect(state).not.toBeUndefined();
    }));
    it('should be returned state by geoId', () => __awaiter(void 0, void 0, void 0, function* () {
        const expectedState = {
            cod: '27',
            geoId: 3448433,
            stateName: 'São Paulo',
            stateCode: 'SP',
            countryName: 'Brazil',
            countryCode: 'BR'
        };
        const state = yield _stateService.GetStateByGeoIdAsync(validGeoId);
        expect(state).toEqual(expectedState);
    }));
    it('should be throw new error when geoId not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const invalidGeoId = 1234;
        const stateResult = yield _stateService
            .GetStateByGeoIdAsync(invalidGeoId)
            .catch((ex) => expect(ex.message)
            .toBe('ERROR (GetStateByGeoIdAsync) GeoId inválido. Estado não encontrado!'));
    }));
});
describe('GetStateByNameAsync Method', () => {
    it('should not be returned object null or empty ', () => __awaiter(void 0, void 0, void 0, function* () {
        const validCityName = 'Rio de Janeiro';
        const state = yield _stateService.GetStateByNameAsync(validCityName);
        expect(state).not.toBeNull();
        expect(state).not.toBeUndefined();
    }));
    it('should be returned state by city name', () => __awaiter(void 0, void 0, void 0, function* () {
        const validCityName = 'Rio de Janeiro';
        const expectedState = {
            cod: '21',
            geoId: 3451189,
            stateName: 'Rio de Janeiro',
            stateCode: 'RJ',
            countryName: 'Brazil',
            countryCode: 'BR'
        };
        const state = yield _stateService.GetStateByNameAsync(validCityName);
        expect(state).toEqual(expectedState);
    }));
    it('should be throw new error when city name not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const invalidCityName = 'Cidade que não existe';
        const stateResult = yield _stateService
            .GetStateByNameAsync(invalidCityName)
            .catch((ex) => expect(ex.message)
            .toBe('ERROR (GetStateByNameAsync) Nome do estado inválido. Estado não encontrado!'));
    }));
});
//# sourceMappingURL=StateService.test.js.map