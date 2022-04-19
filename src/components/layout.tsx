// import './layout.scss';

import { Outlet } from 'react-router-dom';
import { SideBar } from './sidebar';

import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import { User } from '../models/models';
import { Game } from './planB/game';

interface LayoutProps {
  readonly setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  readonly GLOBAL_USER: User;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { setIsAuth, GLOBAL_USER } = props;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideBar setIsAuth={setIsAuth} GLOBAL_USER={GLOBAL_USER} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};
