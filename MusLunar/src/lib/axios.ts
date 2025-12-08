import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json"
  }
});

apiClient.interceptors.response.use(
  (resp) => resp,
  (error) => {
    const message = error?.response?.data?.error?.message || error.message || "Request failed";
    return Promise.reject(new Error(message));
  }
);
