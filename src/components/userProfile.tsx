import {Card, CardActions ,Button, FormControl, Grid, TextField, Box, Typography, CardContent } from '@mui/material'
import React from 'react'
import { User, Course } from '../models/models';
import {coursesStudent}  from '../apis/student_call';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

interface DashboardProps {
    GLOBAL_USER: User;
  }

 export const UserProfile:React.FC<DashboardProps> = (props) => {
    
    /*if(tutors == cTutors){
        var [users, setUsers] = useState<User[]>()
        console.log(GLOBAL_USER['user_name']);
        const getTutors = async () => {
          const response: AxiosResponse = await tutorsList();
          setUsers(response.data as User[])  
        }
        if(users){
          tutors = users
        }
        useEffect(()=>{
          getTutors()
        })
        */
    var [courses, setUserCourses] = useState<Course[]>()
    const getUserCourses = async () => {
      const response: AxiosResponse = await coursesStudent();
      console.log(response);
      setUserCourses(response.data as Course[])
      console.log('courses:', JSON.stringify(courses))
    }

    useEffect(()=>{
        getUserCourses()
      })
      console.log(courses)
  const { GLOBAL_USER } = props;
  console.log(GLOBAL_USER['user_name'])
  return (
    <Box>
        <Typography textAlign='left' variant="h5" sx={{ fontWeight: "bold" }}>Gestione profilo</Typography>
        <Grid container direction="column" alignItems="stretch" justifyContent="center" style={{minHeight:"40vh"}}>
        <Grid item>
            <Card sx={{ pb: '20px'}} >
                <CardContent sx={{ pb: '10px'}}>
                    <Typography textAlign='left' variant="h6">Dati Utente</Typography>
                    <FormControl fullWidth margin='dense'>
                        <TextField
                        id="username"
                        label={GLOBAL_USER['user_name']}
                        type="email"
                        margin='dense'
                        onChange={() => {console.log("Hello !")}}
                        ></TextField>
                        <TextField
                        id="mail"
                        label={GLOBAL_USER['email']}
                        type="email"
                        margin='dense'
                        onChange={() => {console.log("Hello !")}}
                        ></TextField>
                    </FormControl>
                    <CardActions sx={{display:"flex", justifyContent:'space-between'}}>
                        <Button variant="contained" onClick={()=>{console.log("Hello from Button")}}>Modifica e Salva</Button>
                    </CardActions>
                </CardContent>    
            </Card>
        </Grid>    
        </Grid>
    </Box>   
  )
}
