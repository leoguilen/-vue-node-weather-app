"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const chalk_1 = __importDefault(require("chalk"));
require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env.development'
});
const _PORT = process.env.PORT || 3000;
app_1.default.listen(_PORT, () => console.info(chalk_1.default.green('Server is Running')));
//# sourceMappingURL=server.js.map