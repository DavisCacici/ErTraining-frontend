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
        .then((value) => console.log(value))
        .catch((error) => console.log(error));
        if(password !== undefined)
        {
            editPassword(user.id, password)
            .then((value) => console.log(value))
            .catch((error) => console.log(error));
        }
    }

    const CreateUser = () => {
        if(password !== undefined){
            if(user.role === 'tutor')
            {
                addUser(user.user_name, user.email, password, 1)
                .then((value) => console.log(value))
                .catch((error) => console.log(error));
            }
            if(user.role === 'teacher')
            {
                addUser(user.user_name, user.email, password, 2)
                .then((value) => console.log(value))
                .catch((error) => console.log(error));
            }
            if(user.role === 'student')
            {
                addUser(user.user_name, user.email, password, 3)
                .then((value) => console.log(value))
                .catch((error) => console.log(error));
            }
        }
        else{
            alert('La password è obligatoria')
        }  
    }

    const [password, setPassword] = useState<string>();
    const [user, setUser] = useState<User>(props.startingUser ? props.startingUser : {
        id: 0,
        email: '',
        user_name: '',
        role: '',
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
        {console.log(user)}
        <Typography textAlign='left' variant="h5" sx={{ fontWeight: "bold" }}>Crea Nuovo Utente</Typography>
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
                                console.log(user);
                            }}
                        >
                            <MenuItem value={'student'}>Student</MenuItem>
                            <MenuItem value={'teacher'}>Teacher</MenuItem>
                            <MenuItem value={'tutor'}>Tutor</MenuItem>
                        </Select>
                        <FormHelperText>Selezionare un Ruolo è obbligatorio*</FormHelperText>
                        <TextField
                        required
                        defaultValue={autoCompleteIfPossibile(props.startingUser?.user_name)}
                        id="username"
                        label="Nome"
                        type="text"
                        margin='dense'
                        onChange={(e)=>{
                            setUser((prev) => ({...prev, user_name: e.target.value}))
                            console.log(user);
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
                            console.log(user);
                        }}
                        ></TextField>
                        <TextField
                        id="password"
                        label="Password"
                        type='password'
                        margin='dense'
                        onChange={(e) => {setPassword(e.target.value)}}
                        ></TextField>
                        <FormHelperText>Lasciare questo campo vuoto nel caso non si voglia modificare la password corrente</FormHelperText>
                    </FormControl>
                    <CardActions sx={{display:"flex", justifyContent:'space-between'}}>
                        {props.startingUser ? 
                            <Button variant="contained" onClick={()=>{
                                EditUser();
                                props.routeHandler();
                            }}>Modifica</Button>:
                            <Button variant="contained" onClick={()=>{
                                CreateUser();
                                props.routeHandler();
                            }}>Crea</Button>
                        }
                        
                    </CardActions>
                </CardContent>    
            </Card>
        </Grid>    
        </Grid>
    </Box>   
  )
}
