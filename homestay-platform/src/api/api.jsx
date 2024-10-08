import axios from 'axios';

const API_URL = 'http://localhost:8080/api';  // Backend URL

// Axios instance with base URL
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Example API call
export const registerUser = async (userData) => {
    return api.post('/users/register', userData);
};

export const loginUser = async (loginData) => {
    return api.post('/authenticate', loginData);
};

export const fetchHomestays = async (location) => {
    return api.get(`/homestays/location/${location}`);
};

export default api;
