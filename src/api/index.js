import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://91.205.131.83:8822/api/v1/'
});

export default instance;