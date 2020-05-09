import request from 'supertest';
import app from '../../../app';

const agent = request.agent(app);

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
