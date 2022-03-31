import React from "react";
import ReactDOM from "react-dom";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { createTheme } from "@mui/system";

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
    <Card sx={{ maxWidth: 0.6, position: "relative", margin: 20 }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          Corsi attivi
        </Typography>
        
        <Card sx={{ maxWidth: 0.9, maxHeight: 40}} style={{backgroundColor: "#E4F7FF", margin: 10}}>
            <CardContent>
              <Typography variant="body2" color="text.secondary" textAlign="left">
                Corso Sicurezza rischio basso
              </Typography>
            </CardContent>
        </Card>

        <Card sx={{ maxWidth: 0.9, maxHeight: 40, }} style={{backgroundColor: "#E4F7FF", margin: 10}}>
            <CardContent>
              <Typography variant="body2" color="text.secondary" textAlign="left">
                Corso Sicurezza rischio alto
              </Typography>
            </CardContent>
        </Card>

      </CardContent>
    </Card>
  );
}
