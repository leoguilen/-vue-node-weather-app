import { ICity } from '../interfaces/city.interface'

class City implements ICity {
    cod: string
    geoId: number
    cityName: string
    stateName: string
    stateCode: string
    countryName: string
    countryCode: string

    public constructor (city: ICity) {
      this.cod = city.cod
      this.geoId = city.geoId
      this.cityName = city.cityName
      this.stateName = city.stateName
      this.stateCode = city.stateCode
      this.countryName = city.countryName
      this.countryCode = city.countryCode
    }
}

export default City
