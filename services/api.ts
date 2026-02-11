import { getToken } from "@/utils/storage";
import axios from "axios";
import Constants from "expo-constants";

const apiUrl =
  Constants.expoConfig?.extra?.apiUrl ?? Constants.manifest?.extra?.apiUrl;

console.log("url:", apiUrl);

const api = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
    }

    return Promise.reject(error);
  },
);

export default api;
