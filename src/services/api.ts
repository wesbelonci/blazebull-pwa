import axios from "axios";
import { parseCookies } from "nookies";

const { "blazebull.token": token } = parseCookies();

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default api;
