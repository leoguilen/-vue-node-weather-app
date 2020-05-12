import axios from 'axios';

const urlBase = "http://localhost:4545/api/v1";

class CityService {
    static async getCitiesByState(stateGeoId) {
        try {
            const response = await axios({
                baseURL: urlBase,
                method: 'get',
                url: `/cities/state/${stateGeoId}`,
                responseType: 'json'
            })

            return response.data;
        } catch (error) {
            return error;
        }
    }
}

export default CityService;