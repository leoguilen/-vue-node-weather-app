import { IState } from '../../state/interfaces/state.interface'
import { IPlace } from '../interfaces/place.interface'

class Place implements IPlace {
    cod: string;
    geoId: number;
    stateName: string;
    stateCode: string;
    countryName: string;
    countryCode: string;
    states: IState[]

    public constructor (place: IPlace, states: IState[]) {
      this.cod = place.cod
      this.geoId = place.geoId
      this.countryName = place.countryName
      this.countryCode = place.countryCode
      this.states = states
    }
}

export default Place
