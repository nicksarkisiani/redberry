import axios from "axios";

export const API_URL = "https://api.real-estate-manager.redberryinternship.ge/api"

const BEARER_TOKEN = `Bearer 9d0a9aa1-912a-4a86-aa74-436718625876`

export const $api = axios.create({
    withCredentials: false,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = BEARER_TOKEN
    return config;
})