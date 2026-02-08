import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const api = axios.create({
  baseURL: "https://api.github.com/",
});

// Request interceptor
api.interceptors.request.use(
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
api.interceptors.response.use(
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


export const fetchUserData = async(username)=>{
  const response = await api.get(`/users/${username}`);
  return response
}