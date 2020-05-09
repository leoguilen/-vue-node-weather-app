import request from 'supertest';
import app from '../../../app';

const agent = request.agent(app);

describe('GET', () => {
  it('all states ', () => {
    agent.get('/api/v1/states')
      .expect(200)
      .end((err, result) => {
        expect(err).toBeNull();
        expect(result.ok).toBeTruthy();
        expect(result.body).toHaveLength(27);
        expect(result.body[0]).toHaveProperty('geoId');
        expect(result.body[0]).toHaveProperty('stateName');
        expect(result.body[0]).toHaveProperty('countryName');
      });
  });

  it('state by id', () => {
    const stateId = '3665474';

    agent.get(`/api/v1/states/${stateId}`)
      .expect(200)
      .end((err, result) => {
        expect(err).toBeNull();
        expect(result.ok).toBeTruthy();
        expect(result.body.geoId).toBe(parseInt(stateId));
        expect(result.body.stateName).toBe('Acre');
      });
  });

  it('state by name', () => {
    const stateName = 'Bahia';

    agent.get(`/api/v1/states/name/${stateName}`)
      .expect(200)
      .end((err, result) => {
        expect(err).toBeNull();
        expect(result.ok).toBeTruthy();
        expect(result.body.geoId).toBe(3471168);
        expect(result.body.stateName).toBe(stateName);
      });
  });
});
