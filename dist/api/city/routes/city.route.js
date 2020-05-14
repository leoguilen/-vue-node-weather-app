"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const city_controller_1 = __importDefault(require("../controllers/city.controller"));
const cityRoutes = express_1.Router();
cityRoutes.get('/cities/state/:id', city_controller_1.default.getAllByStateId);
cityRoutes.get('/cities/byid', city_controller_1.default.getbyGeoId);
cityRoutes.get('/cities/byname', city_controller_1.default.getbyName);
exports.default = cityRoutes;
//# sourceMappingURL=city.route.js.map