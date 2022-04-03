
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Routes as AppRoutes } from '../routes';
import { About } from './about';
import { Dashboard } from './dashboard_tutor';
import { Home } from './home';
import { Layout } from './layout';
import { Login } from './login';
import { NoMatch } from './no_match';
import { SideBar } from './sidebar';

export const App: React.FC = () => {
  const [authorized, setAuthorized] = useState(false);
  return (
    <div>
      {!authorized ? (
        <Login
          onLogin={() => {
            setAuthorized(true);
          }}
        />
      ) : (
        <div>
          {/* TODO: login
           <button
            onClick={() => {
              setAuthorized(!authorized); 
            }}
          >
            login
          </button> */}
          <Routes>
            <Route
              path={AppRoutes.HOME}
              element={
                <Layout
                  onLogout={() => {
                    setAuthorized(false);
                  }}
                />
              }
            >
              <Route index element={<Home />} />

              {/* <Route path={AppRoutes.LOGIN} element={<Login />} /> */}
              <Route path={AppRoutes.ABOUT} element={<About />} />
              <Route path={AppRoutes.DASHBOARD} element={<Dashboard />} />

              <Route path={AppRoutes.NOMATCH} element={<NoMatch />} />
            </Route>
          </Routes>
        </div>
      )}
    </div>
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
