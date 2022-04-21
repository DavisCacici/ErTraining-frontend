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
  const [pwdRecover, setPwdRecover] = useState(false);
  const navigate = useNavigate();

  //TODO: error handling - ??
  const handleLogin = (user: string, pass: string) => {
    // api call
    login(user, pass)
      .then((res) => {
        // return res;
        // set token in memory
        const token: string = res.data.access_token;
        sessionStorage.setItem('token', token);

        //get blobal user
        const payload = jwt_decode<Payload>(token);
        console.log(payload);

        if (res.status === 200) {
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
        }
      })
      .catch((err) => {
        alert(`ERRORE: ${err}`);
      });
  };

  // FAKE LOGIN
  const fakeLogin = (e: any) => {
    e.preventDefault();
    const role: string = e.target.value;
    // set global usr
    const loggedUser: User = {
      id: 1,
      user_name: 'fake',
      email: 'fake@login.com',
      role: role,
    };
    setGlobalUser(loggedUser);
    setIsAuth(true);
    navigate(AppRoutes.DASHBOARD);
  };

  const handleSubmitResetPWD = () => {
    console.log('Button Test');
    setPwdRecover(false);
  };

  /*useEffect(()=>{login(email, password);}, []);*/
  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };
  return (
    <Box>
      {!pwdRecover ? (
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
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Ricordami"
                    />
                    <FormControlLabel
                      control={<LockIcon />}
                      label="Recupera Password"
                      onClick={() => {
                        setPwdRecover(true);
                      }}
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
            {/* per test senza servizio api attivo */}
            <div>
              Select Role:
              <div>
                <select name="Role" onChange={fakeLogin}>
                  <option value="">None</option>
                  <option value="tutor">Tutor</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </select>
              </div>
            </div>
          </Grid>
        </Grid>
      ) : (
        <Box>
          <Typography
            textAlign="left"
            variant="h5"
            sx={{ fontWeight: 'bold', mb: 5 }}
          >
            Resetta Password
          </Typography>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '30vh' }}
          >
            <Grid item>
              <Card sx={{ py: '20px' }}>
                <CardContent>
                  <TextField
                    required
                    fullWidth
                    id="mail-required"
                    label="Mail"
                    type="email"
                  />
                  <Button
                    sx={{ mt: 5 }}
                    fullWidth
                    variant="contained"
                    onClick={() => {
                      handleSubmitResetPWD();
                    }}
                  >
                    Richiedi Password
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};
