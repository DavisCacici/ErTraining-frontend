import {FormControl,Button, InputLabel,Input, Card, CardContent, Typography, CardActions} from '@mui/material'

const Login:React.FunctionComponent = () => {
    return <div>
        <Card sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 25 }} color="text.primary" gutterBottom>
                Questo è il titolo del LOGIN
                </Typography>
                <FormControl>
                <InputLabel htmlFor="mail-input">Email address</InputLabel>
                <Input id="mail-input" aria-describedby="my-helper-text" />
                </FormControl>
                <br/>
                <FormControl>
                <InputLabel htmlFor="password-input">Password</InputLabel>
                <Input id="password-input" aria-describedby="my-helper-text" />
                </FormControl>
                <CardActions>
                    <Button>Login</Button>
                </CardActions>
                
            </CardContent>
            
        </Card>
    </div> 
}

export default Login;