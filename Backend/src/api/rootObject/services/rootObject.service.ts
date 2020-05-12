import 'reflect-metadata';
import { injectable } from 'inversify';
import fetch from 'node-fetch';
import { IRootObjectService } from '../interfaces/rootObject.interface';
import { IRootObjectModel, IRootObjectWeatherModel } from '../model/rootObject.model';
import * as dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env.development'
});

@injectable()
export class RootObjectService implements IRootObjectService {
  private _basePlacesUrl: URL;
  private _baseWeatherUrl: URL;
  private readonly _geoId: string = '3469034';

  public constructor() {
    this._basePlacesUrl = new URL(
      `http://www.geonames.org/childrenJSON?geonameId=${this._geoId}&callback=listPlaces&style=long&noCacheIE=1585428772700`
    );
    this._baseWeatherUrl = new URL(
      `https://api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid=${process.env.API_KEY}`
    );
  }

  async GetListRootObjectModelStateAsync(): Promise<IRootObjectModel[]> {
    const rootObj = async (): Promise<IRootObjectModel[]> => {
      try {
        const response = await fetch(this._basePlacesUrl);
        const json: string = await (await response.text())
          .replace(/listPlaces\({"totalResultsCount":\d{0,5},"geonames":/g, '')
          .replace('});', '');

        const objList: IRootObjectModel[] = JSON.parse(json);

        return objList;
      } catch (error) {
        throw Error(error);
      }
    };

    return await rootObj();
  }

  async GetListRootObjectModelCityAsync(
    stateGeoId: string
  ): Promise<IRootObjectModel[]> {
    this._basePlacesUrl.searchParams.set('geonameId', stateGeoId);

    const rootObj = async (): Promise<IRootObjectModel[]> => {
      try {
        const response = await fetch(this._basePlacesUrl);
        const json: string = await (await response.text())
          .replace(/listPlaces\({"totalResultsCount":\d{0,5},"geonames":/g, '')
          .replace('});', '');

        const objList: IRootObjectModel[] = JSON.parse(json);

        return objList;
      } catch (error) {
        throw Error(error);
      } finally {
        this._basePlacesUrl.searchParams
          .set('geonameId', this._geoId);
      }
    };

    return await rootObj();
  }

  async GetRootObjectWeatherAsync(
    placeName: string
  ): Promise<IRootObjectWeatherModel> {
    this._baseWeatherUrl.searchParams.set('q', placeName);

    const rootWeatherObj = async (): Promise<IRootObjectWeatherModel> => {
      try {
        const response = await fetch(this._baseWeatherUrl);
        const json: string = await await response.text();

        const objWeather: IRootObjectWeatherModel = JSON.parse(json);

        return objWeather;
      } catch (error) {
        throw Error(error);
      }
    };

    return await rootWeatherObj();
  }
}
