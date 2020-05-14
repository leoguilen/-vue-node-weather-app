"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./api/routes"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
class App {
    constructor() {
        this.express = express_1.default();
        this.Middleware();
        this.Routes();
    }
    Middleware() {
        this.express.use(express_1.default.json());
        this.express.use(cors_1.default());
        this.express.use(morgan_1.default('tiny'));
    }
    Routes() {
        this.express.route('/').get((req, res) => {
            res.type('html');
            res.sendFile(path_1.default.resolve('docs', 'index.html'));
        });
        this.express.use('/api/v1', routes_1.default);
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map