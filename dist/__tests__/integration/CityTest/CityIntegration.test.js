"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
const agent = supertest_1.default.agent(app_1.default);
describe('GET', () => {
    it('all cities', () => {
        const stateId = '3665474';
        agent.get(`/api/v1/cities/state/${stateId}`)
            .expect(200)
            .end((err, result) => {
            expect(err).toBeNull();
            expect(result.ok).toBeTruthy();
            expect(result.body).toHaveLength(22);
            expect(result.body[0]).toHaveProperty('geoId');
            expect(result.body[0]).toHaveProperty('cityName');
            expect(result.body[0]).toHaveProperty('stateName');
        });
    });
    it('city by id in sao paulo state', () => {
        const stateId = '3448433';
        const cityId = '6322114';
        agent.get(`/api/v1/cities/byid?stateId=${stateId}&cityId=${cityId}`)
            .expect(200)
            .end((err, result) => {
            expect(err).toBeNull();
            expect(result.ok).toBeTruthy();
            expect(result.body.geoId).toBe(6322114);
            expect(result.body.cityName).toBe('Atibaia');
            expect(result.body.stateName).toBe('São Paulo');
        });
    });
    it('city by name in sao paulo state', () => {
        const stateId = '3448433';
        const cityName = 'Franco da Rocha';
        agent.get(`/api/v1/cities/byname?stateId=${stateId}&cityName=${cityName}`)
            .expect(200)
            .end((err, result) => {
            expect(err).toBeNull();
            expect(result.ok).toBeTruthy();
            expect(result.body.geoId).toBe(6322245);
            expect(result.body.cityName).toBe(cityName);
            expect(result.body.stateName).toBe('São Paulo');
        });
    });
});
//# sourceMappingURL=CityIntegration.test.js.map