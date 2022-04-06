import {Card, FormControlLabel, Switch, Grid, Box, Typography, CardContent } from '@mui/material'
import {useState} from 'react';
import React from 'react'

 export const Options:React.FunctionComponent = () => {
{/*Questa const va eventualmente spostata a livello superiore*/}
  const [enableDarkTheme, setEnableDarkTheme] = useState('OFF');
  return (
    <Box>
        <Typography textAlign='left' variant="h5" sx={{ fontWeight: "bold" }}>Impostazioni profilo</Typography>
        <Grid container direction="column" alignItems="stretch" justifyContent="center" style={{minHeight:"30vh"}}>
        <Grid item>
            <Card sx={{py: '20px'}}>
                <CardContent>
                    <Typography textAlign='left' variant="h6">Abilita tema scuro:</Typography>
                    <FormControlLabel control={<Switch onChange={ (e) => {
                        if(e.target.checked){
                        setEnableDarkTheme('ON');
                        /*Qui andra messa la funzione che cambia il tema nelle variabili al livello più alto dell applicazione*/ 
                    }else{
                        setEnableDarkTheme('OFF');
                    }}}/>} label={enableDarkTheme} /> 

                </CardContent>
                   
            </Card>
        </Grid>    
        </Grid>

    </Box>   
  )
}