import React, { SetStateAction, useState } from "react";
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

interface ShortcutTutorProps {
  routingCallback(s?:string):void;
}


export const ShortcutTutor: React.FC<ShortcutTutorProps> = (props) => {

  return (
    <div style={classes.root}>
      <div className="card-style">
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h5 className="card-title">Shortcuts</h5>
            </Typography>
            <Grid container spacing={0} direction="row">
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: 120 , height:100, borderRadius:4 }}
                  onClick={() => {
                    props.routingCallback('activeCourses');
                  }}
                >
                  Active <br />
                  courses
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  sx={{ width: 120 , height:100, borderRadius:4 }}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    props.routingCallback('completedCourses');
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
                  sx={{ width: 120 , height:100, borderRadius:4 }}
                  onClick={()=>{props.routingCallback('addCourse')}}
                >
                  Create course
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  sx={{ width: 120 , height:100, borderRadius:4 }}
                  variant="contained"
                  color="primary"
                  onClick={() => { props.routingCallback('addUser')}}
                >
                  Create user
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

