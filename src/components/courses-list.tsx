import React, { useState, useEffect } from 'react';
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
} from '@mui/material';
import { createTheme, style } from '@mui/system';

// CSS customizzato
import './courses-list.scss';

// Icone
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import PlayCircleTwoToneIcon from '@mui/icons-material/PlayCircleTwoTone';
import { Course, User } from '../models/models';
import { coursesList, deleteCourse } from '../apis/tutor_call';
import { coursesTeacher } from '../apis/teacher_call';
import { coursesStudent } from '../apis/student_call';
import { Game } from './planB/game';

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

interface IACProps {
  readonly GLOBAL_USER: User;
  readonly setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  CallbackRoute(): void;
  readonly courseID: number;
  CallbackRefresh(): void;
}

const IconeAzioniCorso: React.FC<IACProps> = (props) => {
  const { GLOBAL_USER, setShowModal, CallbackRoute, courseID, CallbackRefresh } = props;
  const [clickedButton, setClickedButton] = useState('');

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setClickedButton(button.name);
  };

  return (
    <Stack direction="row" spacing={1}>
      {GLOBAL_USER.role === 'student' ? (
        <IconButton
          aria-label="play game"
          onClick={() => {
            console.log('bottone Play Game premuto!');
            setShowModal(true);
          }}
          className="button"
          name="play-button"
        >
          <PlayCircleTwoToneIcon color="primary" />
        </IconButton>
      ) : (
        <>
          <IconButton
            aria-label="edit"
            onClick={() => {
              CallbackRoute();
            }}
            className="button"
            name="edit-button"
          >
            <EditTwoToneIcon color="primary" />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => {
              deleteCourse(courseID).then((res)=>console.log(res.data)).catch((err)=>console.log(err));
              CallbackRefresh();
            }}
            className="button"
            name="delete-button"
          >
            <DeleteTwoToneIcon color="primary" />
          </IconButton>
        </>
      )}
    </Stack>
  );
};

interface CoursesListProps {
  readonly GLOBAL_USER: User;
  CallbackRoute(s: string, c: Course): void;
}

export const CoursesList: React.FC<CoursesListProps> = (props) => {
  const { GLOBAL_USER, CallbackRoute } = props;
  const [courses, setCourses] = useState<Course[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (GLOBAL_USER.role === 'tutor') {
      coursesList()
        .then((res: any) => setCourses(res.data.data as Course[]))
        .catch((error: any) => alert(error));
    }
    if (GLOBAL_USER.role === 'teacher') {
      coursesTeacher()
        .then((res: any) => setCourses(res.data.data as Course[]))
        .catch((error: any) => alert(error));
    }
    if (GLOBAL_USER.role === 'student') {
      coursesStudent()
        .then((res: any) => setCourses(res.data.data as Course[]))
        .catch((error: any) => alert(error));
    }
  }, [refresh]);

  return (
    <div className="card-style">
      <Game showModal={showModal} setShowModal={setShowModal} />
      <Card>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 'bold' }}
          >
            <h5 className="card-title">Courses</h5>
          </Typography>

          <List
            style={{
              backgroundColor: '#E4F7FF',
              margin: 10,
              borderRadius: '5px',
            }}
          >
            {courses.map((course) => (
              <ListItemButton
                key={course.id}
                sx={{
                  minHeight: 15,
                  justifyContent: 'center',
                  px: 1,
                }}
              >
                <ListItemText
                  key={course.name}
                  primary={course.name}
                  sx={{ ml: 2, opacity: 1 }}
                  onClick={() => {
                    console.log('Dettaglio corso premuto!');
                  }}
                />
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 'auto',
                    justifyContent: 'center',
                    color: 'secondary',
                  }}
                >
                  <IconeAzioniCorso
                    courseID={course.id}
                    GLOBAL_USER={GLOBAL_USER}
                    setShowModal={setShowModal}
                    CallbackRoute={() => {
                      CallbackRoute('addCourse', course);
                    }}
                    CallbackRefresh={()=>setRefresh(!refresh)}
                  />
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

interface Props {
  readonly course?: Course;
}

export const CompletedCourses: React.FC<Props> = (props) => {

 const [loading, setLoading] = useState(false);
 const [completedCourses, setCompletedCourses] = useState<Course[]>([])
 const [error, setError] = useState();

 useEffect(() => {
  setLoading(true);
  coursesList()
    .then((res) => setCompletedCourses(res.data.data as Course[]))
    .catch((error: any) => setError(error))
    .finally(() => {
      setLoading(false);
    });
}, []);
var courses: Course[] = [];
if (completedCourses.length > 0){
   for(var i =0; i<completedCourses.length; i++){
     if (completedCourses[i].state === "Completato"){
       courses.push(completedCourses[i])
     }
   }
}


if (loading)
{return <p>Data is loading...</p>;}

return (
<Box>
    <Typography textAlign="left" variant="h5" sx={{ fontWeight: 'bold' }}>
      Gestione profilo
    </Typography>
    <Grid
      container
      direction="column"
      alignItems="stretch"
      justifyContent="center"
      style={{ minHeight: '40vh' }}
    >
      <Grid item>
          
          <div className="card-style">
    <Card sx={{ maxWidth: 1010, position: "relative" }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          <h5 className="card-title">Corsi Finiti</h5>
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
                sx={{ ml: 2, opacity: 1, justifyContent: "center", }}
              />
              <ListItemText
                key={course.description}
                primary={course.description}
                sx={{ ml: 2, opacity: 1, justifyContent: "center", }}
              />
              
            </ListItemButton>
          ))}
        </List>
      </CardContent>
    </Card>
  </div>
      </Grid>    
    </Grid>
  </Box>
  );
};

interface Props {
  readonly course?: Course;
}

export const ActiveCourses: React.FC<Props> = (props) => {

 const [loading, setLoading] = useState(false);
 const [activeCourses, setActiveCourses] = useState<Course[]>([])
 const [error, setError] = useState();

 useEffect(() => {
  setLoading(true);
  coursesList()
    .then((res) => setActiveCourses(res.data.data as Course[]))
    .catch((error: any) => setError(error))
    .finally(() => {
      setLoading(false);
    });
}, []);
var courses: Course[] = [];
if (activeCourses.length > 0){
   for(var i =0; i<activeCourses.length; i++){
     if (activeCourses[i].state === "Attivo"){
       courses.push(activeCourses[i])
     }
   }
}


if (loading)
{return <p>Data is loading...</p>;}

return (
<Box>
    <Typography textAlign="left" variant="h5" sx={{ fontWeight: 'bold' }}>
      Gestione profilo
    </Typography>
    <Grid
      container
      direction="column"
      alignItems="stretch"
      justifyContent="center"
      style={{ minHeight: '40vh' }}
    >
      <Grid item>
          
          <div className="card-style">
    <Card sx={{ maxWidth: 1010, position: "relative" }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          <h5 className="card-title">Corsi Attivi</h5>
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
                sx={{ ml: 2, opacity: 1, justifyContent: "center", }}
              />
              <ListItemText
                key={course.description}
                primary={course.description}
                sx={{ ml: 2, opacity: 1, justifyContent: "center", }}
              />
              
            </ListItemButton>
          ))}
        </List>
      </CardContent>
    </Card>
  </div>
      </Grid>    
    </Grid>
  </Box>
  );
};

