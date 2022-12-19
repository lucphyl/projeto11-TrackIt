import axios from 'axios';

const BASE_URL = 'https://mock-api.driven.com.br/api/v2/trackit';

function criarConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

function login(body){
    const promise = axios.post(`${BASE_URL}/auth/login`, body)

    return promise;
}

function signUp(body){
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body)

    return promise;
}

function DailyHistory(token) {
    const config = criarConfig(token)
    const promise = axios.post(`${BASE_URL}/habits/history/daily`, config)

    return promise;
}

function getHabits(token){
    const config = criarConfig(token);
    const promise = axios.get(`${BASE_URL}/habits`, config)

    return promise;
}

function criarHabits(body, token){
    const config = createConfig(token);

    const promise = axios.post(`${BASE_URL}/habits`, body, config)

    return promise;
}

function deleteHabit(id, token) {
    const config = createConfig(token);
    const promise = axios.delete(`${BASE_URL}/habits/${id}`, config);
  
    return promise;
}

function habitosHoje(token) {
    const config = createConfig(token);
    const promise = axios.get(`${BASE_URL}/habits/today`, config);
  
    return promise;
}

function markHabit(id, token) {
    const config = createConfig(token);
    const promise = axios.post(`${BASE_URL}/habits/${id}/check`, null, config);
  
    return promise;
}

function desmarkHabit(id, token) {
    const config = createConfig(token);
    const promise = axios.post(`${BASE_URL}/habits/${id}/uncheck`, null, config);
  
    return promise;
}

const api = {
    login,
    signUp,
    DailyHistory,
    getHabits,
    criarHabits,
    deleteHabit,
    habitosHoje,
    markHabit,
    desmarkHabit
}

export default api;