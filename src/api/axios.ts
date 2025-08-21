// src/api/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // Backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add JWT token automatically if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
