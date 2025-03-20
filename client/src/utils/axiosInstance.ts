import axios from "axios";
import { store } from "../redux/store";
import { setAccessToken } from "../redux/authSlice";
import { logoutApi } from "../apis/auth/logoutApi";

export const baseURL = "http://localhost:3000/api";

const API = axios.create({
  baseURL,
  withCredentials: true, // Ensures cookies (refresh token) are sent
});

// Function to refresh token
const refreshToken = async () => {
  try {
    const res = await axios.post(
      "/api/auth/refresh-token",
      {},
      { withCredentials: true }
    );
    store.dispatch(setAccessToken(res.data.accessToken));
    return res.data.accessToken;
  } catch (err) {
    store.dispatch(logoutApi());
    throw err;
  }
};

// Axios Interceptor for handling token expiration
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshToken();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return API(originalRequest);
      } catch {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default API;
