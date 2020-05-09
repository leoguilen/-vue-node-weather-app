import 'reflect-metadata';
import { ICityService, ICity } from '../interfaces/city.interface';
import { injectable, inject } from 'inversify';
import { IRootObjectService } from '../../../api/rootObject/interfaces/rootObject.interface';
import { RootObjectService } from '../../../api/rootObject/services/rootObject.service';
import { IRootObjectModel } from '../../../api/rootObject/model/rootObject.model';
import { FormatName } from '../../../utils/string.utils';

@injectable()
export class CityService implements ICityService {
  private readonly _rootObjectService : IRootObjectService

  constructor (
    @inject(RootObjectService) rootObjectService: IRootObjectService
  ) {
    this._rootObjectService = rootObjectService;
  }

  async GetAllCitiesAsync (stateGeoId: string): Promise<ICity[]> {
    let rootObjs: IRootObjectModel[] = [];
    const cities: ICity[] = [];

    try {
      rootObjs = await this._rootObjectService.GetListRootObjectModelCityAsync(stateGeoId);
    } catch (error) {
      throw Error(error);
    }

    if (rootObjs !== null || rootObjs !== undefined) {
      rootObjs.forEach(el => {
        const city: ICity = {
          cod: el.adminCode1,
          geoId: el.geonameId,
          cityName: el.name,
          stateName: el.adminName1,
          stateCode: el.adminCodes1.ISO3166_2,
          countryName: el.countryName,
          countryCode: el.countryCode
        };

        cities.push(city);
      });
    } else {
      throw Error('Array not have any element');
    }

    return cities;
  }

  async GetCityByGeoIdAsync (stateGeoId: string, cityGeoId: number): Promise<ICity> {
    const cities: ICity[] = await this.GetAllCitiesAsync(stateGeoId);

    const cityResult: ICity = cities.find((city) => city.geoId === cityGeoId);

    if (cityResult === null || cityResult === undefined) {
      throw Error('ERROR (GetCityByGeoId) GeoId inválido. Cidade não encontrada!');
    }

    return cityResult;
  }

  async GetCityByNameAsync (stateGeoId: string, cityName: string): Promise<ICity> {
    const cities: ICity[] = await this.GetAllCitiesAsync(stateGeoId);

    cityName = FormatName(cityName);

    const cityResult = cities.find((city) => city.cityName === cityName);

    if (cityResult === null || cityResult === undefined) {
      throw Error('ERROR (GetCityByNameAsync) Nome inválido. Cidade não encontrada!');
    }

    return cityResult;
  }
}
