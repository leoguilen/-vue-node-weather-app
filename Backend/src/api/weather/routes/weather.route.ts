import { Router } from 'express';

import WeatherController from '../controllers/weather.controller';

const weatherRoutes = Router();

weatherRoutes.get('/weather/:place', WeatherController.GetWeatherInfoByPlaceName);

export default weatherRoutes;
