import { Link as RouteLink } from 'react-router-dom';
import { Link , Checkbox, FormControl, FormControlLabel,Button, Card, CardContent, Typography, CardActions, TextField, CardMedia} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import { useEffect, useState } from 'react';
import { login } from '../apis/createPost';

interface LoginProps {
  readonly onLogin: (email: string, password:string) => void;
}

export const Login: React.FC<LoginProps> = (props) => {
  const { onLogin } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  /*useEffect(()=>{login(email, password);}, []);*/
  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  }
  return (
      <Card sx={{ flexDirection: 'column', alignContent: 'space-between', display: 'inline-block', mx: '5px', transform: 'scale(0.9)', minWidth: 275, minHeight:400, borderRadius: '25px'  }}>
            <CardContent>
                <CardMedia
                component='img'
                height="125"
                src = "logo192Er.png"
                alt="Er Training Logo"
                sx={{transform: 'scale(0.95)'}}
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
                    onChange={handleEmail}
                    sx={{mt: 2, mb:1}}
                    />
                <br/>
                    <TextField
                    required
                    id="password-required"
                    label="Password"
                    type="password"
                    onChange={handlePassword}
                    sx={{mt: 1, mb:2}}
                    />
                    <div className='loginDiv'>
                        <FormControlLabel control={<Checkbox />} label="Ricordami" />
                        <LockIcon></LockIcon>
                        <Link href="#">Recupera Password</Link>
                    </div>
                    </FormControl>
                <CardActions sx={{display:"block", mx:1 }}>
                    {/*<Button sx={{px:15}} variant="contained">Login</Button>*/}
                    <Button sx={{px:15}} variant="contained" onClick={()=>onLogin(email, password)}>Login</Button>
                </CardActions>
                
            </CardContent>
            
        </Card>
  );
};