import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  createTheme,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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

const classes = {
  root: {
    flexGrow: 1,
  }
};

export const ShortcutComponent: React.FC = () => {
  return (
    <div style={classes.root}>
      <div className="card-style">
        <Card sx={{ maxWidth: 1010, position: "relative" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h5 className="card-title">Shortcut</h5>
            </Typography>
            <Grid container>
              <Grid item xs={3} sm={3}>
                <Button variant="contained" sx={{ p: 2, borderRadius: 3}}>
                  <div>CORSI ATTIVI</div>
                </Button>
              </Grid>
              <Grid item xs={3} sm={3}>
                <Button variant="contained" sx={{ p: 2, borderRadius: 3}}> 
                  <div>CORSI CONCLUSI</div>
                </Button>
              </Grid>
              <Grid item xs={3} sm={3}>
                <Button variant="outlined" sx={{ p: 2, borderRadius: 3}} startIcon={<AddCircleOutlineIcon />}>
                  <div>CREA CORSO</div>
                </Button>
              </Grid>
              <Grid item xs={3} sm={3}>
                <Button variant="contained" sx={{ p: 2, borderRadius: 3}}>
                  <div>AGGIUNGI UTENTE</div>
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

{
  /* // export default function ShortcutComponent() {
//   return (
//     <div className="card-style">
//       <Card sx={{ maxWidth: 1010, position: "relative" }}>
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             <h5 className="card-title">Shortcut</h5>
//           </Typography>
//           <Button
//             sx={{ mt: 0, mb: 0, mr: 1, ml: 1, p: 3, borderRadius: 4 }}
//             variant="contained"
//           >
//             CORSI ATTIVI
//           </Button>
//           <Button
//             sx={{ mt: 0, mb: 0, mr: 0, ml: 1, p: 3, borderRadius: 4 }}
//             variant="contained"
//           >
//             CORSI CONCLUSI
//           </Button>
//           <Button
//             sx={{ mt: 0, mb: 0, mr: 0, ml: 20, p: 3, borderRadius: 4 }}
//             variant="outlined"
//           >
//             CREA CORSO
//           </Button>
//           <Button
//             sx={{ mt: 0, mb: 0, mr: 0, ml: 2, p: 3, borderRadius: 4 }}
//             variant="contained"
//           >
//             AGGIUNGI UTENTE
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// } */
}
