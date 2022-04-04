import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  createTheme,
  Typography,
} from "@mui/material";
import "./corsi-attivi.scss";
import { flexbox } from "@mui/system";

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

// TODO: usare una grid per rendere responsive i bottoni nello ShortcutComponent

export default function ShortcutComponent() {
  return (
    <div className="card-style">
      <Card sx={{ maxWidth: 1010, position: "relative" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h5 className="card-title">Shortcut</h5>
          </Typography>
          <Button
            sx={{ mt: 0, mb: 0, mr: 1, ml: 1, p: 3, borderRadius: 4 }}
            variant="contained"
          >
            CORSI ATTIVI
          </Button>
          <Button
            sx={{ mt: 0, mb: 0, mr: 0, ml: 1, p: 3, borderRadius: 4 }}
            variant="contained"
          >
            CORSI CONCLUSI
          </Button>
          <Button
            sx={{ mt: 0, mb: 0, mr: 0, ml: 20, p: 3, borderRadius: 4 }}
            variant="outlined"
          >
            CREA CORSO
          </Button>
          <Button
            sx={{ mt: 0, mb: 0, mr: 0, ml: 2, p: 3, borderRadius: 4 }}
            variant="contained"
          >
            AGGIUNGI UTENTE
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
