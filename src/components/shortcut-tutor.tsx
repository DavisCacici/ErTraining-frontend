import React, { useState } from "react";
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
import "./courses-list.scss";
import { AddCourse } from "./add-course";
import { render } from "@testing-library/react";

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
};

// interface ButtonProps {
//   // readonly text: string;
//   readonly clickCallback: () => void;
// }

export const ShortcutTutor: React.FC = (props) => {

  return (
    <div style={classes.root}>
      <div className="card-style">
        <Card sx={{ maxWidth: 1010, position: "relative" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h5 className="card-title">Shortcuts</h5>
            </Typography>
            <Grid container spacing={0} direction="row">
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ ml: 1 }}
                  onClick={() => {
                    console.log("Corsi attivi premuto!");
                  }}
                >
                  Active <br />
                  courses
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    console.log("Corsi completati premuto!");
                  }}
                >
                  Completed <br />
                  courses
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ ml: 0 }}
                  onClick={() => {
                    console.log("Aggiungi corso premuto!");
                  }}            
                >
                  Add course
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    console.log("Aggiungi utente premuto!");
                  }}
                >
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

function handleClick() {
  throw new Error("Function not implemented.");
}

function clickCallback() {
  throw new Error("Function not implemented.");
}

