import * as React from 'react';
import { Routes, Route, Link, useLocation, Outlet } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import { RequireAuth } from './RequireAuth';
import { AuthStatus } from './AuthStatus';

//TODO: integrare app
//TODO: testare form
//TODO: sistemare chiamate api
//TODO: definire tipo user globale
//TODO: propagare tipo user

export default function App() {
  return (
    <AuthProvider>
      <h1>Auth Example</h1>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <div>
      {/* nome e logout button */}
      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

function LoginPage() {
  return (
    <div>
      {/* <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{' '}
        <button type="submit">Login</button>
      </form> */}
    </div>
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}
