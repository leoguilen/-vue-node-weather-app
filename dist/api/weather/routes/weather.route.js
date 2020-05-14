"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const weather_controller_1 = __importDefault(require("../controllers/weather.controller"));
const weatherRoutes = express_1.Router();
weatherRoutes.get('/weather/:place', weather_controller_1.default.GetWeatherInfoByPlaceName);
exports.default = weatherRoutes;
//# sourceMappingURL=weather.route.js.map