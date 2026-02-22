import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#f4f4f4' }}>
        <Link to="/" style={{ margin: '10px' }}>Home</Link>
        <Link to="/profile" style={{ margin: '10px' }}>Profile</Link>
        <Link to="/blog/1" style={{ margin: '10px' }}>Blog Post 1</Link>
        <Link to="/blog/react-router" style={{ margin: '10px' }}>Blog Post React</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/profile/*" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
