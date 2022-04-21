import {
    List,
    ListItemButton,
    ListItemText,
    Button,
    Card,
    CardContent,
    FormControl,
    Grid,
    Box,
    IconButton,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    styled,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
  import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
  import "./add-course.scss";
  import { useEffect, useState } from "react";
  import _ from 'lodash';
  import React from "react";
  import { User, Course } from "../models/models";
  import { coursesList, addCourse, usersList, addUsersCourse, getUsersCourse, editCourse } from "../apis/tutor_call";
  
  // FIXME: nella card che contiene il form aggiungere barra di scorrimento per quando
  // la descrizione è multilinea, altrimenti il bottone Publish scompare sotto.
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
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
       if (activeCourses[i].state !== "In corso"){
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
  