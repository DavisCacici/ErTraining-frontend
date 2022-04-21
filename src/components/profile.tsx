import {
  List, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Card, CardActions ,Button, FormControl, Grid, TextField, Box, Typography, CardContent, ListItem } from '@mui/material'
import { useEffect, useState } from 'react';
import React from 'react';
import { User, Course, Progress } from '../models/models';
import { CoursesList } from "./courses-list";
import { editPassword, editUser, getProgressUser, getUserCourses } from '../apis/generale_call';

import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from './planB/modal/Modal';

interface ProfileProps {
  GLOBAL_USER: User;
}

 export const Profile:React.FunctionComponent<ProfileProps> = (props) => {
    const  {GLOBAL_USER}  = props;
    /*Qui andranno richiesti ed importati l'email e il nome utente tramite chiamata Api
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');*/
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [progress, setProgress] = useState<Progress[]>([])
  const [courseId, setCourseId] = useState(0)
  const [detailUser, setDetailUser] = useState(false);


  const [courses, setData] = useState<Course[]>([]);

  useEffect(() => {
    setLoading(true);
    getUserCourses()
      .then((res) => setData(res.data as Course[]))
      .catch((error: any) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

 
 const EditUser = () => {
    setLoading(true);
     console.log(username)
     console.log(email)
     if(email === '' && username !== ''){
        setEmail(GLOBAL_USER.email)
        editUser(GLOBAL_USER.id, email, username)
        .then((value) => console.log(value))
        .catch((error) => console.log(error))
        .finally(() => {setLoading(false);});
        GLOBAL_USER.user_name = username;
        alert("Username modificato con successo")
     }
     else if(username ==='' && email !== ''){
        setUsername(GLOBAL_USER.user_name)
        editUser(GLOBAL_USER.id, email, username)
        .then((value) => console.log(value))
        .catch((error) => console.log(error))
        .finally(() => {setLoading(false);});
        GLOBAL_USER.email = email;
        alert("email modificata con successo")
     }
     else if (username !== '' && email !== ''){
        editUser(GLOBAL_USER.id, email, username)
        .then((value) => console.log(value))
        .catch((error) => console.log(error))
        .finally(() => {setLoading(false);});
        GLOBAL_USER.user_name = username;
        GLOBAL_USER.email = email;
        alert("Username ed email modificate con successo")
     }
    };


const EditPassword = () => {
    if(password !== undefined)
    {
        editPassword(GLOBAL_USER.id, password)
        .then((value) => console.log(value))
        .catch((error) => console.log(error));
    }
}
var c:number;
const handleProgress = () => {
          try{
            setLoading(true);
           console.log("handleProgress courseId",courseId)
           getProgressUser(courseId).then((res) => setProgress(res.data as Progress[]))
           .catch((error: any) => setError(error))
           .finally(() => {setLoading(false);});
           console.log(progress)
          } finally {setProgress([])}
            
    }

const handleCourseId = (e:number) => {
    setCourseId(e)
}

 const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };
 const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

 if (loading)
 {return <p>Data is loading...</p>;}

  if (error || !Array.isArray(courses)) {
    return <p>There was an error loading your data!</p>;
  }

  /*<Card sx={{ pb: '20px'}} >
  <CardContent sx={{ pb: '10px'}}>
      <Typography textAlign='left' variant="h6">Dati Utente</Typography>
      <FormControl fullWidth margin='dense'>
          <h5> Nome utente : {GLOBAL_USER.user_name}</h5>
          <TextField
          id="username"
          label={GLOBAL_USER.user_name}
          type="email"
          margin='dense'
          onChange={() => {console.log("Hello !")}}
          ></TextField>
          <TextField
          id="mail"
          label={GLOBAL_USER.email}
          type="email"
          margin='dense'
          onChange={() => {console.log("Hello !")}}
          ></TextField>
      </FormControl>
      <CardActions sx={{display:"flex", justifyContent:'space-between'}}>
          <Button variant="contained" onClick={()=>{console.log("Hello from Button")}}>Modifica e Salva</Button>
          <Button variant="contained" onClick={()=>{console.log("Hello from Button")}}>Cambia Password</Button>
      </CardActions>
  </CardContent>  
</Card> */
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
            <Card sx={{ pb: '20px'}} >
                <CardContent sx={{ pb: '10px'}}>
                    <Typography textAlign='left' variant="h6">Dati Utente</Typography>
                  <table>  
                      <tr>
                       <th align='left'> 
                           <h3> Nome utente : {GLOBAL_USER.user_name} </h3>
                        </th>
                       <th align='right'>
                           <FormControl fullWidth margin='dense'>
                               <TextField
                                id="username"
                                label="Modifica username"
                                type="email"
                                margin='dense'
                                onChange={handleUsername}>
                                </TextField>
                            </FormControl>
                        </th>
                    </tr>
                    <tr>
                        <th align='left'>
                            <h3> Email : {GLOBAL_USER.email} </h3>
                        </th>
                        <th align='right'>
                            <TextField
                            id="mail"
                            label="Modifica email"
                            type="email"
                            margin='dense'
                            onChange={handleEmail}></TextField>
                        </th>
                    </tr>
                </table>
                    <CardActions sx={{display:"flex", justifyContent:'space-between'}}>
                        <Button variant="contained" onClick={EditUser}>Modifica dettagli</Button>
                    </CardActions>
                    <table>  
                    <tr>
                        <th align='left'>
                            <h3>Nuova Password</h3>
                        </th>
                        <th align='right'>
                            <TextField
                            id="password"
                            label="Modifica password"
                            type="password"
                            margin='dense'
                            onChange={handlePassword}></TextField>
                        </th>
                    </tr>
                </table>
                <CardActions sx={{display:"flex", justifyContent:'space-between'}}>
                        <Button variant="contained" onClick={EditPassword}>Cambia Password</Button>
                    </CardActions>
                </CardContent>  
            </Card>   
            <div className="card-style">
      <Card sx={{ maxWidth: 1010, position: "relative" }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            <h5 className="card-title">Corsi</h5>
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
                onClick={() => {
                    handleCourseId(course.id)
                    handleProgress()
                  }}
              >
                  <ListItemText
                  key={course.id}
                  primary={course.id}
                  sx={{ ml: 2, opacity: 1 }}
                />
                <ListItemText
                  key={course.name}
                  primary={course.name}
                  sx={{ ml: 2, opacity: 1 }}
                />
                <ListItemText
                  key={course.description}
                  primary={course.description}
                  sx={{ ml: 2, opacity: 1 }}
                  onClick={() => {
                    console.log(course.id)
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
                </ListItemIcon>
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
