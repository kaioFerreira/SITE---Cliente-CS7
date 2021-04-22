import axios from 'axios';

export const api = axios.create({
    // baseURL: 'https://nodedeploy.lctorres.com.br',
    baseURL: 'http://localhost:3333',
});
