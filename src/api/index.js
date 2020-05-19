import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.34.9:82/api/v1/'
});

export default instance;