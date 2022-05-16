import axios from 'axios';


const env = process.env.NODE_ENV
let baseURL = env == "production" ? 'https://applicacao.dev.br/backend/v1' : 'http://localhost:8080/backend/v1';

const http = axios.create({
   baseURL: baseURL
});


export default http;