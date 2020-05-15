import axios from 'axios';

const urlBase = process.env.VUE_APP_ROOT_API;

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
            return error.message;
        }
    }
}

export default CityService;