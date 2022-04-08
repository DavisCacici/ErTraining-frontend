import { Link as RouteLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Link,
  Checkbox,
  FormControl,
  FormControlLabel,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  TextField,
  CardMedia,
  Grid,
} from '@mui/material';
import LockIcon from '@mui/icons-material/LockTwoTone';
import React, { useEffect, useState } from 'react';
import { Routes as AppRoutes } from '../routes';
import { User } from '../models/models';
import { login } from '../apis/generale_call';

interface LoginProps {
  readonly setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  readonly setGlobalUser: React.Dispatch<React.SetStateAction<User>>;
}

export const Login: React.FC<LoginProps> = (props) => {
  const { setIsAuth, setGlobalUser } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (user: string, pass: string) => {
    //axios call
    login(user, pass, (res) => {});

    //set global usr
    const loggedUser: User = {
      id: 1,
      user_name: user,
      email: pass,
    };

    //set token
    // localStorage.setItem(("auth", "token"))

    setGlobalUser(loggedUser);
    setIsAuth(true);
    navigate(AppRoutes.DASHBOARD);
  };

  /*useEffect(()=>{login(email, password);}, []);*/
  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item>
        <Card
          sx={{
            px: '20px',
            py: '30px',
            borderRadius: '25px',
            transform: 'scale(0.95)',
          }}
        >
          <CardContent>
            <CardMedia
              component="img"
              height="125"
              src="E 3.png"
              alt="Er Training Logo"
              sx={{ mb: 5, transform: 'scale(0.85)' }}
            />

            <FormControl margin="dense">
              <TextField
                required
                id="mail-required"
                label="Mail"
                type="email"
                onChange={handleEmail}
                sx={{ mb: 2 }}
              />
              <br />
              <TextField
                required
                id="password-required"
                label="Password"
                type="password"
                onChange={handlePassword}
                sx={{ mt: 2, mb: 2 }}
              />
              <Box sx={{ mb: 5 }}>
                <FormControlLabel control={<Checkbox />} label="Ricordami" />
                <FormControlLabel
                  control={<LockIcon />}
                  label={<Link href="#">Recupera Password</Link>}
                />
              </Box>
            </FormControl>
            <CardActions sx={{ display: 'block' }}>
              <Button
                sx={{ mb: 5 }}
                fullWidth
                variant="contained"
                onClick={() => handleLogin(email, password)}
              >
                Login
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
