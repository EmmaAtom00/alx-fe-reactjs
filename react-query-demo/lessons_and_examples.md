# React Query: Lessons and Examples

This document summarizes key concepts and advanced features experienced during the integration of React Query into the React application.

## Core Concepts

### 1. The `useQuery` Hook
The primary hook for fetching data. It manages the loading, error, and data states automatically.

```jsx
const { data, isLoading, error } = useQuery('queryKey', fetchFunction);
```

### 2. Query Keys
Query keys are used to identify and cache data. They can be strings or arrays (e.g., `['posts', userId]`).

### 3. Stale Time vs. Cache Time
- **`staleTime`**: The duration (in ms) before data is considered "old". While fresh, React Query won't refetch on mount.
- **`cacheTime`**: The duration before inactive data is removed from the cache.

## Advanced Features

### 1. `refetchOnWindowFocus`
Automatically triggers a refetch when the user refocuses the browser tab. This ensures the UI stays synchronized with any remote changes that occurred while the user was away.

```jsx
useQuery('posts', fetchPosts, {
  refetchOnWindowFocus: true,
});
```

### 2. `keepPreviousData`
Essential for maintaining a smooth UI. Instead of dropping data and showing a loading spinner when a query key changes or a refetch occurs, React Query keeps the previous data visible.

```jsx
useQuery('posts', fetchPosts, {
  keepPreviousData: true,
});
```

### 3. Manual Refetching
The `refetch` function returned by `useQuery` allows for explicit data updates (e.g., via a button).

```jsx
const { refetch } = useQuery('posts', fetchPosts);

<button onClick={() => refetch()}>Update Posts</button>
```

## Troubleshooting & Best Practices
- **Peer Dependencies**: React Query v3 might have peer dependency issues with React 19. Use `--legacy-peer-deps` during installation to resolve conflicts.
- **Error Handling**: Always use the `isError` and `error` objects to provide feedback to the user when network requests fail.
