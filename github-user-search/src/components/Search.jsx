import React, { useState } from "react";
import { api, fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = async (e) => {
    e.preventDefault();
    setError("");
    setUserData(null);

    if (!username.trim()) {
      setError("Please enter a username.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetchUserData(username)
      setUserData(response.data);
    } catch (err) {
      const message =
        err?.response?.data?.message || "Something went wrong. Try again...";
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-6">
      {/* Card */}
      <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          GitHub User Search
        </h1>

        {/* Search Form */}
        <form onSubmit={fetchUser} className="flex items-center gap-3">
          {/* Input */}
          <input
            type="text"
            placeholder="Enter GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow transition-all duration-300 active:scale-95"
          >
            Search
          </button>
        </form>

        {/* Loading */}
        {loading && (
          <div className="mt-4 text-blue-600 font-medium animate-pulse text-center flex items-center">
            <span className="loading"></span> <p>Searching…</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-4 p-3 text-red-700 bg-red-100 border border-red-300 rounded-lg text-center">
            {error}
          </div>
        )}

        {/* User Data */}
        {userData && (
          <div className="mt-6 p-5 bg-gray-50 rounded-xl border shadow-sm transition-all duration-300">
            {/* User Profile */}
            <div className="flex flex-col items-center">
              <img
                src={userData.avatar_url}
                alt="avatar"
                className="w-24 h-24 rounded-full shadow-lg mb-4 hover:scale-105 transition-transform duration-300"
              />

              <h2 className="text-xl font-bold text-gray-800">
                <a href={userData.html_url}>
                  {userData.name || userData.login}
                </a>
              </h2>

              <p className="text-gray-500">@{userData.login}</p>

              {userData.bio && (
                <p className="text-center text-gray-700 mt-3">{userData.bio}</p>
              )}

              {/* Stats */}
              <div className="flex justify-center gap-6 mt-5">
                <div className="text-center">
                  <p className="font-bold text-gray-800">
                    {userData.public_repos}
                  </p>
                  <p className="text-gray-500 text-sm">Repositories</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-800">
                    {userData.followers}
                  </p>
                  <p className="text-gray-500 text-sm">Followers</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-800">
                    {userData.following}
                  </p>
                  <p className="text-gray-500 text-sm">Following</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
