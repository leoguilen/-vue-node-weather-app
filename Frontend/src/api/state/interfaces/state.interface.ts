import { IPlace } from '../../place/interfaces/place.interface'
import { ICity } from '../../city/interfaces/city.interface'
// import State from '../model/state.model'

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IState extends IPlace {
    cities?: ICity[]
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IStateService {
    GetAllStatesAsync(): Promise<IState[]>
    GetStateByGeoIdAsync(geoId: number): Promise<IState>
    GetStateByNameAsync(stateName: string): Promise<IState>
}
