import { Link as RouteLink } from 'react-router-dom';
import { Box,  Link , Checkbox, FormControl, FormControlLabel,Button, Card, CardContent, Typography, CardActions, TextField, CardMedia, Grid} from '@mui/material'
import LockIcon from '@mui/icons-material/LockTwoTone';
import { useEffect, useState } from 'react';

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
    <Grid container direction="column" alignItems="center" justifyContent="center" style={{minHeight:"100vh"}}>
        <Grid item>
            <Card sx={{ px: '30px', py: '75px', borderRadius: '25px'}}>
            <CardContent>
                <CardMedia
                component='img'
                height="125"
                src = "E 3.png"
                alt="Er Training Logo"
                sx={{mb:5, transform: 'scale(0.8)'}}
                />
                
                <FormControl margin="dense">
                    <TextField
                    required
                    id="mail-required"
                    label="Mail"
                    type="email"
                    onChange={handleEmail}
                    sx={{mb:2}}
                    />
                <br/>
                    <TextField
                    required
                    id="password-required"
                    label="Password"
                    type="password"
                    onChange={handlePassword}
                    sx={{mt: 2, mb: 2}}
                    />
                    <Box sx={{mb: 5}}>        
                        <FormControlLabel control={<Checkbox />} label="Ricordami" />
                        <FormControlLabel control={<LockIcon/> } label= {<Link href="#">Recupera Password</Link>} />
                    </Box>
                </FormControl>
                <CardActions sx={{display:"block"}}>
                    <Button sx={{mb: 5}} fullWidth variant="contained" onClick={()=>onLogin(email, password)}>Login</Button>
                </CardActions>
                
            </CardContent>
            
            </Card>      
        </Grid>
    </Grid>
         
  );
};