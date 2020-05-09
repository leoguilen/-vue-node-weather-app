import { ICityService } from '../interfaces/city.interface';
import DIContainer from '../../../config/inversify.config';
import { CityService } from '../services/city.service';
import { Request, Response } from 'express';

const _cityService: ICityService = DIContainer.resolve<ICityService>(CityService);

class CityController {
  async getAllByStateId (req: Request, res: Response): Promise<void> {
    const stateGeoId = req.params.id;

    await _cityService.GetAllCitiesAsync(stateGeoId)
      .then((result) => {
        res.status(200);
        res.json(result);
      })
      .catch((error) => {
        res.status(500);
        res.send(`Detalhes do erro: ${error.stack}`);
      });
  }

  async getbyGeoId (req: Request, res: Response): Promise<void> {
    const stateGeoId = req.query.stateId;
    const cityGeoId = req.query.cityId;

    await _cityService.GetCityByGeoIdAsync(stateGeoId, parseInt(cityGeoId))
      .then((result) => {
        res.status(200);
        res.json(result);
      })
      .catch((error) => {
        res.sendStatus(404);
        console.log(error);
      });
  }

  async getbyName (req: Request, res: Response): Promise<void> {
    const stateGeoId = req.query.stateId;
    const cityName = req.query.cityName;

    await _cityService.GetCityByNameAsync(stateGeoId, cityName)
      .then((result) => {
        res.status(200);
        res.json(result);
      })
      .catch((error) => {
        res.sendStatus(404);
        console.log(error);
      });
  }
}

export default new CityController();
