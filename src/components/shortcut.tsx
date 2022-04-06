import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardContent,
  createTheme,
  Grid,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "./active-courses.scss";
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
             <Grid container spacing={0} direction="row">
              <Grid item xs={3}>
                <Button variant="contained" color="primary"  sx={{ p: 2 }}>
                  Active <br/>courses
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" color="primary"  sx={{ p: 2 }}>
                  Completed <br/>courses
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button variant="outlined" color="primary"  sx={{ p: 2 }}>
                  Add course
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" color="primary"  sx={{ p: 2 }}>
                  Add user
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
