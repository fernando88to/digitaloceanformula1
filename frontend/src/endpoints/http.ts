import axios from 'axios';

const http = axios.create({
   //baseURL: process.env.BACKEND_HOST ?? 'http://0.0.0.0:8080/backend',
   baseURL: 'https://applicacao.dev.br/backend/v1',

});


export default http;