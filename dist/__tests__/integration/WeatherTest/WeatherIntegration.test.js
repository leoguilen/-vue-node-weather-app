"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
const agent = supertest_1.default.agent(app_1.default);
describe('GET', () => {
    it('weather infos', () => {
        const placeName = 'São Paulo';
        agent.get(`/api/v1/weather/${placeName}`)
            .expect(200)
            .end((err, result) => {
            expect(err).toBeNull();
            expect(result.ok).toBeTruthy();
            expect(result.body).toHaveProperty('Temperature');
            expect(result.body).toHaveProperty('Humidity');
            expect(result.body).toHaveProperty('Pressure');
            expect(result.body.PlaceName).toBe(placeName);
        });
    });
});
//# sourceMappingURL=WeatherIntegration.test.js.map