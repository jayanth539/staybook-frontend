import axios from "axios";

const http = axios.create({ baseURL: import.meta.env.VITE_API_BASE });

http.interceptors.request.use((config) => {
  const token = localStorage.getItem("sb_jwt");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default http;
