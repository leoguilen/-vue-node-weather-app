import axios from 'axios';

const urlBase = process.env.VUE_APP_ROOT_API;

class WeatherService {
    static async getInfo(place) {
        try {
            const response = await axios({
                baseURL: urlBase,
                method: 'get',
                url: `/weather/${place}`,
                responseType: 'json'
            });
            return response.data;
        } catch (error) {
            throw error.message;
        }
    }
}

export default WeatherService;