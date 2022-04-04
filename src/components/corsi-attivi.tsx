import React from "react";
// MUI
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { createTheme, style } from "@mui/system";

// CSS customizzato
import "./corsi-attivi.scss";

// Icone
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import PlayCircleTwoToneIcon from "@mui/icons-material/PlayCircleTwoTone";

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

// const Item = styled(Card)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'left',
//   color: theme.palette.text.secondary,
// }));

// const IconItem = styled(Card)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'right',
//   color: theme.palette.text.secondary,
// }));

const IconeAzioniCorso: React.FC = () => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="play game">
        <PlayCircleTwoToneIcon />
      </IconButton>
      <IconButton aria-label="edit">
        <EditTwoToneIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteTwoToneIcon />
      </IconButton>
    </Stack>
  );
};

export const CorsiAttivi: React.FC = () => {
  return (
    <div className="card-style">
      <Card sx={{ maxWidth: 1010, position: "relative" }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            <h5 className="card-title">Corsi attivi</h5>
          </Typography>

          <Card
            // sx={{ maxWidth: 980, maxHeight: 40, padding: -1 }}
            sx={{ px: -3 }}
            style={{ backgroundColor: "#E4F7FF", margin: 10 }}
          >
            <CardContent>                             
              <List>
                <ListItemButton
                  key={'prova'}
                  sx={{
                    minHeight: 20,
                    justifyContent: 'center',
                    px: 1,
                  }}
                  >
                  <ListItemText primary={'Corso sicurezza livello basso'} sx={{ opacity: 1 }} />
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 'auto',
                        justifyContent: 'center',
                        color: 'secondary'
                      }}
                      >
                      <IconeAzioniCorso/>
                    </ListItemIcon>
                </ListItemButton>
              </List>              
            </CardContent>            
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};
