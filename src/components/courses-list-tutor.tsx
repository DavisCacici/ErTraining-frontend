import React, { useState } from "react";
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
import "./courses-list.scss";

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

const list = [
  {
    courseName: "Corso sicurezza rischio basso",
  },
  {
    courseName: "Corso sicurezza rischio medio",
  },
  {
    courseName: "Corso sicurezza rischio alto",
  },
];

const IconeAzioniCorso: React.FC = () => {
  const [clickedButton, setClickedButton] = useState("");

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setClickedButton(button.name);
  };

  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        aria-label="play game"
        onClick={() => {
          console.log("bottone Play Game premuto!");
        }}
        className="button"
        name="play-button"
      >
        <PlayCircleTwoToneIcon color="primary" />
      </IconButton>
      <IconButton
        aria-label="edit"
        onClick={() => {
          console.log("bottone Edit premuto!");
        }}
        className="button"
        name="edit-button"
      >
        <EditTwoToneIcon color="primary" />
      </IconButton>
      <IconButton
        aria-label="delete"
        onClick={() => {
          console.log("bottone Delete premuto!");
        }}
        className="button"
        name="delete-button"
      >
        <DeleteTwoToneIcon color="primary" />
      </IconButton>
    </Stack>
  );
};

export const CoursesList: React.FC = () => {
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
            <h5 className="card-title">Courses</h5>
          </Typography>

          <List
            style={{
              backgroundColor: "#E4F7FF",
              margin: 10,
              borderRadius: "5px",
            }}
          >
            <ListItemButton
              key={"prova"}
              sx={{
                minHeight: 15,
                justifyContent: "center",
                px: 1,
              }}
            >
              <ListItemText
                primary={"Corso sicurezza rischio basso"}
                sx={{ ml: 2, opacity: 1 }}
                onClick={() => {
                  console.log("Dettaglio corso premuto!");
                }}
              />
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: "auto",
                  justifyContent: "center",
                  color: "secondary",
                }}
              >
                <IconeAzioniCorso />
              </ListItemIcon>
            </ListItemButton>
          </List>
        </CardContent>
      </Card>
    </div>
  );
};