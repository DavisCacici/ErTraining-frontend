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
// import jwt_decode from 'jwt-decode';

interface LoginProps {
  readonly setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  readonly setGlobalUser: React.Dispatch<React.SetStateAction<User>>;
}

export const Login: React.FC<LoginProps> = (props) => {
  const { setIsAuth, setGlobalUser } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (user: string, pass: string) => {
    //api call
    const token = await login(user, pass)
      .then((value) => {
        const token = value.data.access_token;
        console.log(token);

        //set token in memory
        sessionStorage.setItem('token', token);

        //get blobal user
        // const payload = jwt_decode<object>(token);
        // console.log(payload);

        //set global usr
        const loggedUser: User = {
          id: 1,
          user_name: user,
          email: pass,
          role: 'tutor'
        };

        setGlobalUser(loggedUser);
        setIsAuth(true);
        navigate(AppRoutes.DASHBOARD);
      })
      .catch((error) => {
        alert(error);
      });
  };

  /*useEffect(()=>{login(email, password);}, []);*/
  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  }
  return ( 
    <Grid container direction="column" alignItems="center" justifyContent="center" style={{minHeight:"100vh"}}>
      <Grid item>
        <Card sx={{ px: '20px', py: '30px', borderRadius: '25px', transform: 'scale(0.95)'}}>
              <CardContent>
                <CardMedia
                component='img'
                height="125"
                src = "E_3.png"
                alt="Er Training Logo"
                sx={{mb:5, transform: 'scale(0.85)'}}
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
                      label={<Link href="#">Recupera Password</Link>}/>
                  </Box>
                </FormControl>
                <CardActions sx={{ display: 'block' }}>
                  <Button
                    sx={{ mb: 5 }}
                    fullWidth
                    variant="contained"
                    onClick={() => handleLogin(email, password)}>
                    Login
                  </Button>
                </CardActions>
              </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
