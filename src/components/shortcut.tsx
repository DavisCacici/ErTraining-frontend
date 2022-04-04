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
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "blue",
    fontFamily: "Roboto",
  },
  button: {
    padding: 4,
    borderRadius: 3
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
            <Grid container spacing={3}>
              <Grid item xs={6} sm={'auto'}>
                <Button
                  className="paper"
                  variant="contained"
                  sx={{ p: 4, borderRadius: 3}}
                >
                  CORSI ATTIVI
                </Button>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Button className="paper" variant="contained" sx={{ p: 4, borderRadius: 3}}> 
                  CORSI CONCLUSI
                </Button>
              </Grid>
              <Grid item xs={6} sm={'auto'}>
                <Button className="paper" variant="outlined" sx={{ p: 4, borderRadius: 3}} startIcon={<AddCircleOutlineIcon />}>
                  CREA CORSO
                </Button>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Button className="paper" variant="contained" sx={{ p: 4, borderRadius: 3}}>
                  AGGIUNGI UTENTE
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
