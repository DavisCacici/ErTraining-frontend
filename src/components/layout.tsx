// import './layout.scss';

import { Outlet } from 'react-router-dom';
import { SideBar } from './sidebar';

import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import { User } from '../models/models';

interface LayoutProps {
  readonly setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  readonly globalUser: User;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { setIsAuth, globalUser } = props;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideBar setIsAuth={setIsAuth} globalUser={globalUser} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};
