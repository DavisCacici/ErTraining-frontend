import React from "react";
// MUI
import { Box, Button, Card, CardActionArea, CardContent, Grid, IconButton, SvgIcon, Typography } from "@mui/material";
import { createTheme } from "@mui/system";

// CSS customizzato
import './corsi-attivi.scss';

// Icone
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import PlayCircleTwoToneIcon from '@mui/icons-material/PlayCircleTwoTone';

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

export const CorsiAttivi: React.FC= () =>  {
  return (
    <div className='card-style'>
      <Card sx={{ maxWidth: 1010, position: "relative"}}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            <h5 className="card-title">Corsi attivi</h5>
          </Typography>        
        
          <Card sx={{ maxWidth: 980, maxHeight: 40, padding: -2}} style={{backgroundColor: "#E4F7FF", margin: 10}}>  
            <CardContent>   
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>            
                <Typography variant="body2" color="text.secondary"> 
                  <span>Corso sicurezza rischio basso</span>                                  
                </Typography>   

                <IconButton sx={{ m: -4, ml: 60, mb: -3}} edge="end" size="small" color="primary">                                       
                  <PlayCircleTwoToneIcon sx={{ mr: 2}}/>  
                  <EditTwoToneIcon sx={{ mr: 2}}/>   
                  <DeleteTwoToneIcon sx={{ mr: 2}}/>               
                </IconButton>                 
              </div>                                      
            </CardContent>           
          </Card>

          <Card sx={{ maxWidth: 980, maxHeight: 40, }} style={{backgroundColor: "#E4F7FF", margin: 10}}>
            <CardActionArea>              
                <CardContent>                  
                  <Typography variant="body2" color="text.secondary" textAlign="left">
                    Corso Sicurezza rischio alto                                       
                  </Typography>                  
                </CardContent>
            </CardActionArea>            
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
