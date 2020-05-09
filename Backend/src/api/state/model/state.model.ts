import { ICity } from '../../city/interfaces/city.interface'
import { IState } from '../interfaces/state.interface'

class State implements IState {
    public cod: string;
    public geoId: number;
    public stateName: string;
    public stateCode: string;
    public cities: ICity[];
    public countryName: string;
    public countryCode: string;

    public constructor (state: IState) {
      this.cod = state.cod
      this.geoId = state.geoId
      this.countryName = state.countryName
      this.countryCode = state.countryCode
      this.stateName = state.stateName
      this.stateCode = state.stateCode
      this.cities = state.cities
    }
}

export default State
