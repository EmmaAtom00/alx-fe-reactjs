# Lesson: Advanced Routing with React Router

This guide will walk you through implementing advanced routing techniques in React, including nested routes, dynamic routes, and protected routes.

## Prerequisites
- Node.js installed
- Basic knowledge of React hooks (`useState`, `useEffect`)

---

## Step 1: Project Setup

First, initialize a new Vite project and install the necessary routing library.

```bash
# Create project
npm create vite@latest react-router-advanced -- --template react

# Navigate into project (Note: We moved files to root for this project)
cd react-router-advanced

# Install routing library
npm install react-router-dom
```

---

## Step 2: Basic Router Configuration

Wrap your application in `BrowserRouter` and define your initial routes in `App.jsx`.

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
```

---

## Step 3: Implementing Nested Routes

Nested routes allow you to render sub-components within a parent layout.

1. **Use the `Outlet` component**: This is where the child routes will render.
2. **Define child routes**: Use a wildcard `/*` or nest `<Route>` tags.

**Parent Component (`Profile.jsx`):**
```jsx
import { Link, Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h2>Profile Section</h2>
      <nav>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Child components render here */}
    </div>
  );
}
```

**App Configuration:**
```jsx
<Route path="/profile" element={<Profile />}>
  <Route path="details" element={<ProfileDetails />} />
  <Route path="settings" element={<ProfileSettings />} />
</Route>
```

---

## Step 4: Dynamic Routing

Dynamic routes use parameters (prefixed with `:`) to handle variable path segments like IDs or slugs.

1. **Define the route**: Use `:id` or `:slug`.
2. **Access the param**: Use the `useParams` hook.

**Component (`BlogPost.jsx`):**
```jsx
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); // 'id' matches the path name :id
  return <div>Post ID: {id}</div>;
}
```

**App Configuration:**
```jsx
<Route path="/blog/:id" element={<BlogPost />} />
```

---

## Step 5: Protected Routes

Protected routes restrict access based on a condition (like authentication).

1. **Create a Guard Component**: This component checks the auth status.
2. **Navigate on failure**: Use `<Navigate />` to redirect unauthorized users.

**Guard Component (`ProtectedRoute.jsx`):**
```jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  return isAuthenticated ? children : <Navigate to="/" />;
}
```

**App Configuration:**
```jsx
<Route 
  path="/profile" 
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  } 
/>
```

---

## Summary Checklist
- [x] Install `react-router-dom`.
- [x] Use `BrowserRouter`, `Routes`, and `Route`.
- [x] Use `Outlet` for nested content.
- [x] Use `useParams` for dynamic data.
- [x] Wrap sensitive routes in a custom `ProtectedRoute`.
