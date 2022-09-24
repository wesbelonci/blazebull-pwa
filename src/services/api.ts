import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// api.interceptors.request.use((config) => {
//   const accessToken = localStorage.getItem("@blazebull:token");

//   api.defaults.headers.common = { Authorization: `bearer ${accessToken}` };

//   return config;
// });

export default api;
