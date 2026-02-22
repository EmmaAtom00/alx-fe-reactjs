import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    // Adding some query options for better demonstration
    staleTime: 10000, // Data is fresh for 10 seconds
    cacheTime: 300000, // Cache persists for 5 minutes
    refetchOnWindowFocus: true, // Refetch data when window gains focus
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  if (isLoading) {
    return <div className="loading-container"><div className="loader"></div><p>Fetching posts...</p></div>;
  }

  if (isError) {
    return (
      <div className="error-container">
        <p>Error: {error.message}</p>
        <button onClick={() => refetch()} className="btn btn-error">Retry</button>
      </div>
    );
  }

  return (
    <div className="posts-container">
      <div className="posts-header">
        <h2>Latest Posts</h2>
        <button onClick={() => refetch()} className="btn btn-primary">Refetch Posts</button>
      </div>
      <ul className="posts-list">
        {data.map((post) => (
          <li key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
