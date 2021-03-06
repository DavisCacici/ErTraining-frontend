import React, { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { User } from '../models/models';
import { Routes as AppRoutes } from '../routes';
import { About } from './about';
import { ProtectedRoute } from './auth/protectedRoute';
import { Anagrafiche } from './anagrafiche';
import { AnagraficaRouteWrapper } from './anagraficheRouteWrapper';
import { Dashboard } from './dashboard';
import { Layout } from './layout';
import { Login } from './login';
import { NoMatch } from './no_match';
import { Profile } from './profile';
import { Settings } from './settings';
import { SideBar } from './sidebar';
import { ProgressStudent } from './ProgressStudents';
import { Game } from './planB/game';
import { AddCourse } from './add-course';
import { PasswordRecover } from './passwordRecover';

export const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [globalUser, setGlobalUser] = useState<User>({
    id: 0,
    user_name: '',
    email: '',
    role: '',
  });

  return (
    <Routes>
      <Route
        path={AppRoutes.LOGIN}
        element={<Login setIsAuth={setIsAuth} setGlobalUser={setGlobalUser} />}
      />
      <Route path={AppRoutes.PWDRECOVER} element={<PasswordRecover />} />

      <Route
        path={AppRoutes.HOME}
        element={
          <ProtectedRoute isAuth={isAuth}>
            <Layout GLOBAL_USER={globalUser} setIsAuth={setIsAuth} />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard GLOBAL_USER={globalUser} />} />

        {/* <Route path={AppRoutes.LOGIN} element={<Login setIsAuth={setIsAuth} />} /> */}
        <Route
          path={AppRoutes.DASHBOARD}
          element={<Dashboard GLOBAL_USER={globalUser} />}
        />
        <Route path={AppRoutes.USERS} element={<AnagraficaRouteWrapper />} />
        {/*AnagraficaRouteWFrapper Anagrafiche GLOBAL_USER={globalUser} */}
        <Route
          path={AppRoutes.PROFILE}
          element={<Profile GLOBAL_USER={globalUser} />}
        />
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
