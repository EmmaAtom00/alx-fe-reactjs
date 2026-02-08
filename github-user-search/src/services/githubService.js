import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = axios.create({
  baseURL: "https://api.github.com/",
});

// Request interceptor
fetchUserData.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
fetchUserData.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        console.error("Authentication failed");
      } else if (status === 500) {
        console.error("Server error");
      }
    } else if (error.code === "ECONNABORTED") {
      console.error("No internet connection");
    }

    // Always reject so calling code can handle it
    return Promise.reject(error);
  },
);
