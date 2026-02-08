import React, { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]); // array of users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1); // for pagination
  const [totalCount, setTotalCount] = useState(0); // total results from API

  // Fetch users based on criteria
  const fetchUser = async (e, reset = true) => {
    if (e) e.preventDefault();
    setError("");

    if (!username.trim() && !location.trim() && !minRepos) {
      setError("Please enter at least one search criteria.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetchUserData({
        username,
        location,
        minRepos,
        page,
      });

      const { items, total_count } = response.data;

      if (reset) {
        setUsers(items);
      } else {
        setUsers((prev) => [...prev, ...items]);
      }
      setTotalCount(total_count);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  // Load more results (pagination)
  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  // When page changes, fetch next page
  React.useEffect(() => {
    if (page > 1) {
      fetchUser(null, false);
    }
  }, [page]);

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6">
      <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          GitHub Advanced User Search
        </h1>

        {/* Search Form */}
        <form
          onSubmit={(e) => {
            setPage(1);
            fetchUser(e);
          }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />

          <input
            type="number"
            placeholder="Minimum repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            min={0}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow transition-all duration-300 active:scale-95"
          >
            Search
          </button>
        </form>

        {/* Loading */}
        {loading && (
          <div className="mt-4 text-blue-600 font-medium animate-pulse text-center">
            Searching…
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-4 p-3 text-red-700 bg-red-100 border border-red-300 rounded-lg text-center">
            {error}
          </div>
        )}

        {/* Search Results */}
        {users.length > 0 && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {users.map((user) => (
              <UserCard key={user.id} username={user.login} />
            ))}
          </div>
        )}

        {/* Load More */}
        {users.length > 0 && users.length < totalCount && (
          <div className="flex justify-center mt-6">
            <button
              onClick={loadMore}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg shadow transition-all duration-300 active:scale-95"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Component to fetch and display detailed user info
const UserCard = ({ username }) => {
  const [userData, setUserData] = useState(null);

  React.useEffect(() => {
    fetchUserData(username)
      .then((res) => setUserData(res.data))
      .catch(() => {});
  }, [username]);

  if (!userData) return null;

  return (
    <div className="p-5 bg-gray-50 rounded-xl border shadow-sm flex gap-4 transition-all duration-300 hover:shadow-lg">
      <img
        src={userData.avatar_url}
        alt={userData.login}
        className="w-16 h-16 rounded-full shadow-lg"
      />
      <div>
        <h2 className="font-bold text-gray-800">
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            {userData.name || userData.login}
          </a>
        </h2>
        <p className="text-gray-500 text-sm">@{userData.login}</p>
        {userData.location && (
          <p className="text-gray-500 text-sm">📍 {userData.location}</p>
        )}
        <div className="flex gap-4 mt-2 text-sm">
          <p>Repos: {userData.public_repos}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
        </div>
        {userData.bio && <p className="text-gray-700 mt-2">{userData.bio}</p>}
      </div>
    </div>
  );
};

export default Search;
