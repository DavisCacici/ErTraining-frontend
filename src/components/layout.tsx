// import './layout.scss';

import { Outlet } from 'react-router-dom';
import { SideBar } from './sidebar';

import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';

// export const Layout: React.FC = () => {
//   return (
//     <div className="box">
//       layout
//       {/* A "layout route" is a good place to put markup you want to
//           share across all the pages on your site, like navigation. */}
//       <div className="sidenav">
//         <SideBar />
//       </div>
//       {/* An <Outlet> renders whatever child route is currently active,
//           so you can think about this <Outlet> as a placeholder for
//           the child routes we defined above. */}
//       <div className="main">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

interface LayoutProps {
  readonly onLogout: () => void;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { onLogout } = props;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideBar onLogout={onLogout} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};
