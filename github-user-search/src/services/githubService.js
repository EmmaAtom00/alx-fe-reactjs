// githubService.js
import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const api = axios.create({
  baseURL: "https://api.github.com/search/users?q=",
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
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

    return Promise.reject(error);
  },
);

// Fetch single user by username
export const searchUsers = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response;
};

// Advanced search: username, location, minRepos
export const fetchUserData = async ({ username, location, minRepos }) => {
  let query = "";
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const response = await api.get(
    `${encodeURIComponent(query)}&per_page=10`,
  );
  return response;
};
