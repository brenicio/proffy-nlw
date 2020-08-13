import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.60.96:3333'
});

export default api;