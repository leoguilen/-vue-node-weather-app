import axios from 'axios';

const urlBase = process.env.VUE_APP_ROOT_API;

class StateService {
    static async getAll() {
        try {
            const response = await axios({
                baseURL: urlBase,
                method: 'get',
                url: '/states',
                responseType: 'json'
            })
            return response.data;
        } catch (error) {
            throw error.message;
        }
    }
}

export default StateService;