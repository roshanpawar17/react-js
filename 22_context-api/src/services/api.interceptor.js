import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// Request interceptor for adding the auth token
api.interceptors.request.use(
    (config) => {
        console.log('config', config);
        const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))?.token : null;
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        console.error('Interceptor Request Error: ', err);
        return Promise.reject(err);
    }
)

// Response interceptor for handling common errors
api.interceptors.response.use(
    (res) => res,
    (err) => {
        console.error('Interceptor Response Error: ', err);
        if (err?.status === 401) {
            localStorage.removeItem('user');
            window.location.href = '/login';
        }
        return Promise.reject(err);
    }
)