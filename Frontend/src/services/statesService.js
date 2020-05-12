import axios from 'axios';

const urlBase = "http://localhost:4545/api/v1";

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
            return error;
        }
    }
}

export default StateService;