import {Card, CardActions ,Button, FormControl, Grid, TextField, Box, Typography, CardContent, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material'
import {User} from '../models/models'
import React, { useEffect, useState } from 'react'
import { addUser, editPassword, editUser } from '../apis/tutor_call';

interface CreateUserProps{
    readonly startingType?:string;
    readonly startingUser?:User;
    routeHandler():void;
}


export const CreateOrEditUser:React.FunctionComponent<CreateUserProps> = (props) => {

    const EditUser = () => {
        editUser(user.id, user.email, user.user_name)
        .then((value) => {})
        .catch((error) => console.log(error));
        if(password !== undefined)
        {
            editPassword(user.id, password)
            .then((value) => {})
            .catch((error) => console.log(error));
        }
    }

    const CreateUser = () => {
        let role = 0;
        if(password){
            if(user.role === 'tutor')
            {
                role = 1
            }
            if(user.role === 'teacher')
            {
                role = 2
            }
            if(user.role === 'student')
            {
                role = 3
            }
            addUser(user.user_name, user.email, password, role)
            .then((value) => {})
            .catch((error) => console.log(error));
        }
        else{
            alert('La password è obligatoria')
        }  
        props.routeHandler();
    }

    const [password, setPassword] = useState<string>();
    const [user, setUser] = useState<User>(props.startingUser ? props.startingUser : {
        id: 0,
        email: '',
        user_name: '',
        role: props.startingType!,
    });
    //const [startingValue, setStartingValue] = useState('')
    function handleSelectStartingValue(s:string|undefined):string{
        return s?s:'';
    }
    
    const autoCompleteIfPossibile = (data:string|undefined) => {
        return data? data:undefined;
    }
    return (
    <Box>
        <Typography textAlign='left' variant="h5" sx={{ fontWeight: "bold" }}>{props.startingUser ? 'Edit User' : 'Create User'}</Typography>
        <Grid container direction="column" alignItems="stretch" justifyContent="center" style={{minHeight:"40vh"}}>
        <Grid item>
            <Card sx={{ pb: '20px'}} >
                <CardContent sx={{ pb: '10px'}}>
                    <FormControl fullWidth margin='dense'>
                    <InputLabel id="role-label">Role</InputLabel>
                        <Select
                            defaultValue={handleSelectStartingValue(props.startingType)}
                            required
                            labelId="role-label"
                            id="role"
                            label="Role"
                            onChange={(e)=>{
                                setUser(prev => ({...prev, role: e.target.value}))
                            }}
                        >
                            <MenuItem value={'student'}>Student</MenuItem>
                            <MenuItem value={'teacher'}>Teacher</MenuItem>
                            <MenuItem value={'tutor'}>Tutor</MenuItem>
                        </Select>
                        <FormHelperText>A role must be selected*</FormHelperText>
                        <TextField
                        required
                        defaultValue={autoCompleteIfPossibile(props.startingUser?.user_name)}
                        id="username"
                        label="Name"
                        type="text"
                        margin='dense'
                        onChange={(e)=>{
                            setUser((prev) => ({...prev, user_name: e.target.value}))
                        }}
                        ></TextField>
                        <TextField
                        required
                        defaultValue={autoCompleteIfPossibile(props.startingUser?.email)}
                        id="mail"
                        label="Mail"
                        type="email"
                        margin='dense'
                        onChange={(e)=>{
                            setUser((prev) => ({...prev, email: e.target.value}))
                        }}
                        ></TextField>
                        <TextField
                        id="password"
                        label="Password"
                        type='password'
                        margin='dense'
                        onChange={(e) => {setPassword(e.target.value)}}
                        ></TextField>
                        {props.startingUser ? 
                        <FormHelperText>Leave this field empty if you don't want to change the password</FormHelperText>
                        : <FormHelperText></FormHelperText>}
                    </FormControl>
                    <CardActions sx={{display:"flex", justifyContent:'space-between'}}>
                        {props.startingUser ? 
                            <Button variant="contained" onClick={()=>{
                                EditUser();
                                props.routeHandler();
                            }}>Edit</Button>:
                            <Button variant="contained" onClick={()=>{
                                CreateUser();
                                
                            }}>Create</Button>
                        }               
                    </CardActions>
                </CardContent>    
            </Card>
        </Grid>    
        </Grid>
    </Box>   
  )
}
