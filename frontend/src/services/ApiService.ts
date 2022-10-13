import axios from "axios";

//Esse arquivo vai pegar junto do AXIS, os valores la da minha API do meu backend
export const ApiService = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {'Content-Type': 'application/json'}

});