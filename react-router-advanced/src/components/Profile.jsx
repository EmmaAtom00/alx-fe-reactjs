import { Routes, Route, Link, Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default Profile;
