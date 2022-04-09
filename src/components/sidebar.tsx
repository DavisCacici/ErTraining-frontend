import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Routes as AppRoutes } from '../routes';

import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  DashboardTwoTone,
  HomeTwoTone,
  InfoTwoTone,
  LogoutTwoTone,
  PermIdentityTwoTone,
  SettingsApplicationsTwoTone,
} from '@mui/icons-material';
import { SearchAppBar } from './searchbar';
import CardMedia from '@mui/material/CardMedia';
import { User } from '../models/models';

const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  height: '95vh',
  borderRadius: 40,
  margin: 15,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  height: '95vh',
  borderRadius: 40,
  margin: 15,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

interface SideBarProps {
  readonly onLogout: () => void;
  readonly globalUser: User;
}

export const SideBar: React.FC<SideBarProps> = (props) => {
  const { onLogout, globalUser } = props;
  // const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Drawer
        variant="permanent"
        open={open}
        sx={{ borderColor: 'black', borderRadius: 40 }}
      >
        <DrawerHeader>
          <CardMedia
            component="img"
            height="125"
            src="E_3.png"
            alt="Er Training Logo"
            sx={{
              transform: 'scale(0.75)',
              display: !open ? 'none' : 'flex',
            }}
          />
          <div style={{ height: '130px', marginInline: 'auto' }}>
            <IconButton onClick={handleDrawer} sx={{ mt: 5 }}>
              {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
        </DrawerHeader>
        <SearchAppBar open={open} />
        <List>
          <ListItemButton
            component={Link}
            to="about"
            key={'about'}
            sx={{
              minHeight: 48,
              justifyContent: 'initial',
              px: 3.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <InfoTwoTone />
            </ListItemIcon>
            <ListItemText
              primary={'ABOUT'}
              sx={{ ml: 1, my: 1, opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="dashboard"
            key={'dashboard'}
            sx={{
              minHeight: 48,
              justifyContent: 'initial',
              px: 3.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <DashboardTwoTone />
            </ListItemIcon>
            <ListItemText
              primary={'DASHBOARD'}
              sx={{ ml: 1, my: 1, opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
          <Divider />
          <ListItemButton
            component={Link}
            to="settings"
            key={'settings'}
            sx={{
              minHeight: 48,
              justifyContent: 'initial',
              px: 3.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <SettingsApplicationsTwoTone />
            </ListItemIcon>
            <ListItemText
              primary={'SETTINGS'}
              sx={{ ml: 1, my: 1, opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="profile"
            key={'profile'}
            sx={{
              minHeight: 48,
              justifyContent: 'initial',
              px: 3.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <PermIdentityTwoTone />
            </ListItemIcon>
            <ListItemText
              primary={'PROFILE'}
              sx={{ ml: 1, my: 1, opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
          <ListItemButton
            component={Link}
            onClick={onLogout}
            to="#"
            key={'logout'}
            sx={{
              minHeight: 48,
              justifyContent: 'initial',
              px: 3.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <LogoutTwoTone />
            </ListItemIcon>
            <ListItemText
              primary={'LOGOUT'}
              sx={{ ml: 1, my: 1, opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
          <div>{globalUser.user_name}</div>
        </List>
      </Drawer>
    </Box>
  );
};
