import { IWeatherService } from '../interfaces/weather.interface';
import DIContainer from '../../../config/inversify.config';
import { WeatherService } from '../services/weather.service';
import { Response, Request } from 'express';

const _weatherService: IWeatherService = DIContainer.resolve<IWeatherService>(WeatherService);

class WeatherController {
  async GetWeatherInfoByPlaceName (req: Request, res: Response): Promise<void> {
    const placeName: string = req.params.place;

    await _weatherService.GetWeatherInfosAsync(placeName)
      .then((result) => {
        res.status(200);
        res.json(result);
      })
      .catch((error) => {
        res.status(500);
        res.send(`Detalhes do erro: ${error.stack}`);
      });
  }
}

export default new WeatherController();
