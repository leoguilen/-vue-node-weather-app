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
const inversify_config_1 = __importDefault(require("../../../config/inversify.config"));
const state_service_1 = require("../services/state.service");
const _stateService = inversify_config_1.default.resolve(state_service_1.StateService);
class StateController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield _stateService.GetAllStatesAsync()
                .then((result) => {
                res.status(200);
                res.json(result);
            })
                .catch((error) => {
                res.status(500);
                res.send(`Detalhes do erro: ${error.stack}`);
            });
        });
    }
    getByGeoId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reqId = parseInt(req.params.id);
            yield _stateService.GetStateByGeoIdAsync(reqId)
                .then((result) => {
                res.status(200);
                res.json(result);
            })
                .catch((error) => {
                res.status(500);
                res.send(`Detalhes do erro: ${error.stack}`);
            });
        });
    }
    getByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reqName = req.params.name;
            yield _stateService.GetStateByNameAsync(reqName)
                .then((result) => {
                res.status(200);
                res.json(result);
            })
                .catch((error) => {
                res.status(500);
                res.send(`Detalhes do erro: ${error.stack}`);
            });
        });
    }
}
exports.default = new StateController();
//# sourceMappingURL=state.controller.js.map