import React, { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Routes as AppRoutes } from '../routes';
import { About } from './about';
import { Dashboard } from './dashboard-tutor';
import { Home } from './home';
import { Layout } from './layout';
import { Login } from './login';
import { NoMatch } from './no_match';
import { Profile } from './profile';
import { Settings } from './settings';
import { SideBar } from './sidebar';

export const App: React.FC = () => {
  const [authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(AppRoutes.DASHBOARD);
  };
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<Login onLogin={handleLogin} />} />

      <Route
        path={AppRoutes.DASHBOARD}
        element={
          <Layout
            onLogout={() => {
              setAuthorized(false);
            }}
          />
        }
      >
        <Route index element={<Dashboard />} />

        <Route path={AppRoutes.LOGIN} element={<Login />} />
        <Route path={AppRoutes.ABOUT} element={<About />} />
        <Route path={AppRoutes.DASHBOARD} element={<Dashboard />} />
        <Route path={AppRoutes.PROFILE} element={<Profile />} />
        <Route path={AppRoutes.SETTINGS} element={<Settings />} />

        <Route path={AppRoutes.NOMATCH} element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.tsx</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
