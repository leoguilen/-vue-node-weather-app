"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const state_controller_1 = __importDefault(require("../controllers/state.controller"));
const stateRoutes = express_1.Router();
stateRoutes.get('/states', state_controller_1.default.getAll);
stateRoutes.get('/states/:id', state_controller_1.default.getByGeoId);
stateRoutes.get('/states/name/:name', state_controller_1.default.getByName);
exports.default = stateRoutes;
//# sourceMappingURL=state.route.js.map