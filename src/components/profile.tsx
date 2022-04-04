import {Card, CardActions ,Button, FormControl, Grid, TextField, Box, Typography, CardContent } from '@mui/material'
import { useEffect, useState } from 'react';
import React from 'react'

 export const Profile:React.FunctionComponent = () => {
{/*Qui andranno richiesti ed importati l'email e il nome utente tramite chiamata Api
  const [enableDarkTheme, setEnableDarkTheme] = useState('OFF');*/}
  return (
    <Box>
        <Typography textAlign='left' variant="h5" sx={{ fontWeight: "bold" }}>Gestione profilo</Typography>
        <Grid container direction="column" alignItems="center" justifyContent="center" style={{minHeight:"60vh"}}>
        <Grid item>
            <Card sx={{ pb: '30px'}}>
                <CardContent>
                    <FormControl margin='dense'>
                        <TextField
                        id="username"
                        label="Nome"
                        type="email"
                        margin='dense'
                        sx={{width:350}}
                        onChange={() => {console.log("Hello !")}}
                        ></TextField>
                        <TextField
                        id="mail"
                        label="Mail"
                        type="email"
                        margin='dense'
                        onChange={() => {console.log("Hello !")}}
                        ></TextField>
                    </FormControl>
                    <CardActions sx={{display:"block"}}>
                        <Button sx={{mb: 5}} variant="contained" onClick={()=>{console.log("Hello from Button")}}>Cambia Password</Button>
                    </CardActions>
                </CardContent>    
            </Card>
        </Grid>    
        </Grid>
    </Box>   
  )
}