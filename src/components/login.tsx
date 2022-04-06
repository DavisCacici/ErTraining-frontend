import { Link as RouteLink, useLocation, useNavigate } from 'react-router-dom';
import {
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
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth } from './hooks/useAuth';

interface LoginProps {
  readonly onLogin?: () => void;
}

export const Login: React.FC<LoginProps> = (props) => {
  const { onLogin } = props;

  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  //sarà giusto?
  const from = location.pathname || '/';

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    //integrare con risultato chiamata api
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }

  return (
    <Card
      sx={{
        flexDirection: 'column',
        alignContent: 'space-between',
        display: 'inline-block',
        mx: '5px',
        transform: 'scale(0.9)',
        minWidth: 275,
        minHeight: 400,
        borderRadius: '25px',
      }}
    >
      <CardContent>
        <CardMedia
          component="img"
          height="125"
          src="logo192Er.png"
          alt="Er Training Logo"
          sx={{ transform: 'scale(0.95)' }}
        />
        {/*<Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                BENVENUTO IN ER TRAINING
                </Typography>*/}

        <FormControl margin="dense">
          <TextField
            required
            id="mail-required"
            label="Mail"
            type="email"
            sx={{ mt: 2, mb: 1 }}
          />
          <br />
          <TextField
            required
            id="password-required"
            label="Password"
            type="password"
            sx={{ mt: 1, mb: 2 }}
          />
          <div className="loginDiv">
            <FormControlLabel control={<Checkbox />} label="Ricordami" />
            <LockIcon></LockIcon>
            <Link href="#">Recupera Password</Link>
          </div>
        </FormControl>
        <CardActions sx={{ display: 'block', mx: 1 }}>
          {/*<Button sx={{px:15}} variant="contained">Login</Button>*/}
          <Button sx={{ px: 15 }} variant="contained" onClick={onLogin}>
            Login
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
