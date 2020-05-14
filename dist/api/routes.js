"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importações das rotas
const state_route_1 = __importDefault(require("./state/routes/state.route"));
const city_route_1 = __importDefault(require("./city/routes/city.route"));
const weather_route_1 = __importDefault(require("./weather/routes/weather.route"));
const routes = [state_route_1.default, city_route_1.default, weather_route_1.default]; // Aqui vão as minhas rotas
exports.default = routes;
//# sourceMappingURL=routes.js.map