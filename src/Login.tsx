import {Link, Checkbox, FormControl, FormControlLabel,Button, Card, CardContent, Typography, CardActions, TextField, CardMedia} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';


const Login:React.FunctionComponent = () => {
    return <div>
        <Card sx={{ flexDirection: 'column', alignContent: 'space-between', display: 'inline-block', mx: '5px', transform: 'scale(0.9)', minWidth: 275, minHeight:400, borderRadius: '25px'  }}>
            <CardContent>
                <CardMedia
                component='img'
                height="125"
                src = "logo192.png"
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
                    sx={{mt: 2, mb:1}}
                    />
                <br/>
                    <TextField
                    required
                    id="password-required"
                    label="Password"
                    type="password"
                    sx={{mt: 1, mb:2}}
                    />
                    <div className='loginDiv'>
                        <FormControlLabel control={<Checkbox />} label="Ricordami" />
                        <LockIcon></LockIcon>
                        <Link href="#">Recupera Password</Link>
                    </div>
                    </FormControl>
                <CardActions sx={{display:"block", mx:1 }}>
                    <Button sx={{px:15}} variant="contained">Login</Button>
                </CardActions>
                
            </CardContent>
            
        </Card>
    </div> 
}

export default Login;