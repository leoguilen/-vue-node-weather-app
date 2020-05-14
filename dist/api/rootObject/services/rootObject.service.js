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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const node_fetch_1 = __importDefault(require("node-fetch"));
const dotenv = __importStar(require("dotenv"));
dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env.development'
});
let RootObjectService = class RootObjectService {
    constructor() {
        this._geoId = '3469034';
        this._basePlacesUrl = new URL(`http://www.geonames.org/childrenJSON?geonameId=${this._geoId}&callback=listPlaces&style=long&noCacheIE=1585428772700`);
        this._baseWeatherUrl = new URL(`https://api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid=${process.env.API_KEY}`);
    }
    GetListRootObjectModelStateAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const rootObj = () => __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield node_fetch_1.default(this._basePlacesUrl);
                    const json = yield (yield response.text())
                        .replace(/listPlaces\({"totalResultsCount":\d{0,5},"geonames":/g, '')
                        .replace('});', '');
                    const objList = JSON.parse(json);
                    return objList;
                }
                catch (error) {
                    throw Error(error);
                }
            });
            return yield rootObj();
        });
    }
    GetListRootObjectModelCityAsync(stateGeoId) {
        return __awaiter(this, void 0, void 0, function* () {
            this._basePlacesUrl.searchParams.set('geonameId', stateGeoId);
            const rootObj = () => __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield node_fetch_1.default(this._basePlacesUrl);
                    const json = yield (yield response.text())
                        .replace(/listPlaces\({"totalResultsCount":\d{0,5},"geonames":/g, '')
                        .replace('});', '');
                    const objList = JSON.parse(json);
                    return objList;
                }
                catch (error) {
                    throw Error(error);
                }
                finally {
                    this._basePlacesUrl.searchParams
                        .set('geonameId', this._geoId);
                }
            });
            return yield rootObj();
        });
    }
    GetRootObjectWeatherAsync(placeName) {
        return __awaiter(this, void 0, void 0, function* () {
            this._baseWeatherUrl.searchParams.set('q', placeName);
            const rootWeatherObj = () => __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield node_fetch_1.default(this._baseWeatherUrl);
                    const json = yield yield response.text();
                    const objWeather = JSON.parse(json);
                    return objWeather;
                }
                catch (error) {
                    throw Error(error);
                }
            });
            return yield rootWeatherObj();
        });
    }
};
RootObjectService = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], RootObjectService);
exports.RootObjectService = RootObjectService;
//# sourceMappingURL=rootObject.service.js.map