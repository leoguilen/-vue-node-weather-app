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
const city_service_1 = require("../../city/services/city.service");
const rootObject_service_1 = require("../../rootObject/services/rootObject.service");
const inversify_1 = require("inversify");
const string_utils_1 = require("../../../utils/string.utils");
let StateService = class StateService {
    constructor(rootObjectService, cityService) {
        this._rootObjectService = rootObjectService;
        this._cityService = cityService;
    }
    GetAllStatesAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            let rootObjs;
            const states = [];
            try {
                rootObjs = yield this._rootObjectService.GetListRootObjectModelStateAsync();
            }
            catch (error) {
                throw Error(error);
            }
            if (rootObjs !== null || rootObjs !== undefined) {
                rootObjs.forEach(rootEl => {
                    const state = {
                        cod: rootEl.adminCode1,
                        geoId: rootEl.geonameId,
                        stateName: rootEl.name,
                        stateCode: rootEl.adminCodes1.ISO3166_2,
                        countryName: rootEl.countryName,
                        countryCode: rootEl.countryCode
                    };
                    states.push(state);
                });
            }
            else {
                throw Error('Array not have any element');
            }
            return states;
        });
    }
    GetStateByGeoIdAsync(geoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const allStates = yield this.GetAllStatesAsync();
            const stateResult = allStates.find((state) => {
                return state.geoId === geoId;
            });
            if (stateResult === null || stateResult === undefined) {
                throw Error('ERROR (GetStateByGeoIdAsync) GeoId inválido. Estado não encontrado!');
            }
            return stateResult;
        });
    }
    GetStateByNameAsync(stateName) {
        return __awaiter(this, void 0, void 0, function* () {
            const allStates = yield this.GetAllStatesAsync();
            stateName = string_utils_1.FormatName(stateName);
            const stateResult = allStates.find((state) => {
                return state.stateName === stateName;
            });
            if (stateResult === null || stateResult === undefined) {
                throw Error('ERROR (GetStateByNameAsync) Nome do estado inválido. Estado não encontrado!');
            }
            return stateResult;
        });
    }
};
StateService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(rootObject_service_1.RootObjectService)),
    __param(1, inversify_1.inject(city_service_1.CityService)),
    __metadata("design:paramtypes", [Object, Object])
], StateService);
exports.StateService = StateService;
//# sourceMappingURL=state.service.js.map