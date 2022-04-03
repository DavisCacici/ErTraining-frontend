import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, CardActionArea, CardContent, createTheme, Typography } from '@mui/material';
import './corsi-attivi.scss';

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export default function ShortcutComponent() {
    return (
      <div className='card-style'>
        <Card sx={{ maxWidth: 1010, position: 'relative'}}>       
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h5 className="card-title">Shortcut</h5>
            </Typography>  
            <Button variant="contained">CORSI ATTIVI</Button> 
            <Button variant="contained">CORSI CONCLUSI</Button>     
            <Button variant="outlined">CREA CORSO</Button> 
            <Button variant="contained">AGGIUNGI UTENTE</Button>     
          </CardContent>
        </Card>
      </div>
    );
    
  }