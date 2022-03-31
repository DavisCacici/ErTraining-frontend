import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

export default function ShortcutComponent() {
    return (
      <Card sx={{ maxWidth: 0.6, position: 'relative'}}>
        <CardActionArea>          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Shortcut
            </Typography>            
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }