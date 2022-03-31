import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { createTheme } from '@mui/system';

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});

export default function CorsiAttivi() {
    return (
      <div>
        <Card sx={{ maxWidth: 0.6, position: 'relative' }}>
          <CardActionArea>          
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize: "bold"}}>
                Corsi attivi
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lista corsi...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
