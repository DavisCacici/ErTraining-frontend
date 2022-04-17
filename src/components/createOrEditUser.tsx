import {Card, CardActions ,Button, FormControl, Grid, TextField, Box, Typography, CardContent, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material'
import {User} from '../models/models'
import React from 'react'

interface CreateUserProps{
    readonly startingType?:string;
    readonly stratingUser?:User;
    routeHandler():void;
}


export const CreateOrEditUser:React.FunctionComponent<CreateUserProps> = (props) => {

    //const [startingValue, setStartingValue] = useState('')
    function handleSelectStartingValue(s:string|undefined):string{
        return s?s:'';
    }
    
    const autoComopleteIfPossibile = (data:string|number|undefined) => {
        return data? data:undefined;
    }
    return (
    <Box>
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
                        >
                            <MenuItem value={'student'}>Student</MenuItem>
                            <MenuItem value={'teacher'}>Teacher</MenuItem>
                            <MenuItem value={'tutor'}>Tutor</MenuItem>
                        </Select>
                        <FormHelperText>Selezionare un Ruolo è obbligatorio*</FormHelperText>
                        <TextField
                        required
                        defaultValue={autoComopleteIfPossibile(props.stratingUser?.user_name)}
                        id="username"
                        label="Nome"
                        type="email"
                        margin='dense'
                        onChange={() => {console.log("Hello !")}}
                        ></TextField>
                        <TextField
                        required
                        defaultValue={autoComopleteIfPossibile(props.stratingUser?.email)}
                        id="mail"
                        label="Mail"
                        type="email"
                        margin='dense'
                        onChange={() => {console.log("Hello !")}}
                        ></TextField>
                        <TextField
                        id="password"
                        label="Password"
                        type='password'
                        margin='dense'
                        onChange={() => {console.log("Hello !")}}
                        ></TextField>
                        <FormHelperText>Lasciare questo campo vuoto nel caso non si voglia modificare la password corrente</FormHelperText>
                    </FormControl>
                    <CardActions sx={{display:"flex", justifyContent:'space-between'}}>
                        <Button variant="contained" onClick={()=>{props.routeHandler()}}>Crea</Button>
                    </CardActions>
                </CardContent>    
            </Card>
        </Grid>    
        </Grid>
    </Box>   
  )
}
