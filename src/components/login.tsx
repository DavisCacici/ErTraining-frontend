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
import jwt_decode from 'jwt-decode';
import { AxiosResponse } from 'axios';

interface Payload {
  email: string;
  exp: number;
  iat: number;
  id: number;
  iss: string;
  jti: string;
  name: string;
  nbf: number;
  prv: string;
  role: string;
  sub: string;
}

interface LoginProps {
  readonly setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  readonly setGlobalUser: React.Dispatch<React.SetStateAction<User>>;
}

export const Login: React.FC<LoginProps> = (props) => {
  const { setIsAuth, setGlobalUser } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  //TODO: error handling - ??
  const handleLogin = async (user: string, pass: string) => {
    // api call
    const response: AxiosResponse = await login(user, pass);
    console.log(response);

    const token: string = response.data.access_token;

    // set token in memory
    sessionStorage.setItem('token', token);

    //get blobal user
    const payload = jwt_decode<Payload>(token);
    console.log(payload);

    if (response.status === 200) {
      // set global usr
      const loggedUser: User = {
        id: payload.id,
        user_name: payload.name,
        email: payload.email,
        role: payload.role,
      };
      setGlobalUser(loggedUser);
      setIsAuth(true);
      navigate(AppRoutes.DASHBOARD);
    } else {
      alert(response.status);
    }
  };

  const fakeLogin = () => {
    // set global usr
    const loggedUser: User = {
      id: 1,
      user_name: 'fake',
      email: 'fake@login.com',
      role: 'edit in login component',
    };
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
              src="logo192Er.png"
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
          {/* per test senza servizio api attivo */}
          <button onClick={fakeLogin}>FAKE LOGIN</button>
        </Card>
      </Grid>
    </Grid>
  );
};
