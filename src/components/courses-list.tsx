import React, { useState, useEffect } from "react";
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
import { Course, User } from "../models/models";
import { coursesList } from "../apis/tutor_call";
import { coursesTeacher } from '../apis/teacher_call';
import { coursesStudent } from '../apis/student_call';

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
interface DashboardProps {
  GLOBAL_USER: User;
}

export const CoursesList: React.FC<DashboardProps> = (props) => {
  const [courses, setCourses] = useState<Course[]>([]);
  useEffect(() => {
    if(props.GLOBAL_USER.role === 'tutor')
    {
      coursesList().then((res: any) => setCourses(res.data.data as Course[]))
      .catch((error: any) => alert(error));
    }
    if(props.GLOBAL_USER.role === 'teacher')
    {
      coursesTeacher().then((res: any) => setCourses(res.data.data as Course[]))
      .catch((error: any) => alert(error));
    }
    if(props.GLOBAL_USER.role === 'student')
    {
      coursesStudent().then((res: any) => setCourses(res.data.data as Course[]))
      .catch((error: any) => alert(error));
    }
    
  }, []);

 {/* export const CoursesList: React.FC<CourseList> = () => {

  const [coursesList, setCoursesList] = useState<CourseList[]>([
    {
      id: 1,
      name: "Corso Sicurezza sul Lavoro rischio basso",
      description: "",
      state: "active",
    },
    {
      id: 2,
      name: "Corso Sicurezza sul Lavoro rischio medio",
      description: "",
      state: "active",
    },
    {
      id: 3,
      name: "Corso Antincendio rischio alto",
      description: "",
      state: "active",
    },
  ]); */}

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
            {courses.map((course) => (
              <ListItemButton
                key={course.id}
                sx={{
                  minHeight: 15,
                  justifyContent: "center",
                  px: 1,
                }}
              >
                <ListItemText
                  key={course.name}
                  primary={course.name}
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
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};
