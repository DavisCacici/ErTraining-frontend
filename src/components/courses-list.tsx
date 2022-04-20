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
import { coursesList } from '../apis/tutor_call';
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
}

const IconeAzioniCorso: React.FC<IACProps> = (props) => {
  const { GLOBAL_USER, setShowModal, CallbackRoute } = props;
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
              console.log('bottone Delete premuto!');
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
  }, []);

  return (
    <div className="card-style">
      <Game showModal={showModal} setShowModal={setShowModal} />
      <Card sx={{ maxWidth: 1010, position: 'relative' }}>
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
                    GLOBAL_USER={GLOBAL_USER}
                    setShowModal={setShowModal}
                    CallbackRoute={() => {
                      CallbackRoute('addCourse', course);
                    }}
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
