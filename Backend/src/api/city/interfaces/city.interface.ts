/* eslint-disable @typescript-eslint/interface-name-prefix */
import { IPlace } from '../../place/interfaces/place.interface'

export interface ICity extends IPlace {
    cityName?: string
}

export interface ICityService {
    GetAllCitiesAsync(stateGeoId: string): Promise<ICity[]>
    GetCityByGeoIdAsync(stateGeoId: string, cityGeoId: number): Promise<ICity>
    GetCityByNameAsync(stateGeoId: string, cityName: string): Promise<ICity>
}
