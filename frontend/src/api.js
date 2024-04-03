import axios from "axios"
import { ACCESS_TOKEN } from "./constants";

const apiURL = "https://ca16f33c-ab4b-4047-8459-3eb5173a31dd-dev.e1-us-cdp-2.choreoapis.dev/djangoreactcrudapp/backend/rest-api-be2/v1.0"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiURL,
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    })

export default api;