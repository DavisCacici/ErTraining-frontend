import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import "./add-course.scss";
import { useEffect, useState } from "react";
import _ from 'lodash';
import React from "react";
import { User, Course } from "../models/models";
import { addCourse, usersList, addUsersCourse } from "../apis/tutor_call";

// FIXME: nella card che contiene il form aggiungere barra di scorrimento per quando
// la descrizione è multilinea, altrimenti il bottone Publish scompare sotto.


interface Props {
  // readonly GLOBAL_USER: User;
  readonly courseID?: number;
}

export const AddCourse: React.FC<Props> = (props) => {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    usersList().then((res: any) =>setUsers(res.data.data as User[])).catch((err)=>console.log(err));
  }, []);

  const [input, setInput] = useState({
    title: "",
    description: "",
  });


  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>): void => {

    setInput(prev => ({...prev, [e.target.name]: e.target.value}));    
    // console.log(input);
  };
  
  const handleClick = async () => {
    try{
      var response = await addCourse(input.title, input.description);
      if(participants.length > 0 )
      {
        addUsersCourse(response.data.data.id, participants).then((res)=>console.log(res)).catch((err)=>console.log(err));
      }
    }
    catch(e){
      console.log(e);
    }
    
    
    
    // console.log(participants);
  };

  const [participants, setParticipants] = useState<string[]>([]);

  const handleChangeSelect = (e: SelectChangeEvent<typeof participants>) => { 
    setParticipants(
      typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value,
    );
  };

  return (
    <div>
      <h2>Add course</h2>
      <div>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" sx={{ mt: 2 }}>
              <div className="add-course-form">Add a course title</div>
            </Typography>
            <form>
              <TextField
                required
                id="outlined"
                variant="outlined"
                size="small"
                helperText="* Please note this is a required field"
                sx={{ width: "100%", mb: 3 }}
                value={input.title}
                onChange={handleChangeForm}
                name="title"
              />

              <Typography gutterBottom variant="h5" component="h2">
                <div className="add-course-form">Add a description</div>
              </Typography>
              <TextField
                id="outlined-multiline-flexible"
                multiline
                maxRows={4}
                size="small"
                variant="outlined"
                sx={{ width: "100%", mb: 3 }}
                value={ input.description }
                onChange={handleChangeForm}
                name="description"
              />
             
              <Typography gutterBottom variant="h5" component="h2">
                <div className="add-course-form">Select participants</div>
              </Typography>

              <FormControl fullWidth sx={{  minWidth: 120 }} size="small">
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={participants}
                  onChange={handleChangeSelect}
                >
      
                  {_.map(users, (user, index) => {
                    return <MenuItem key={index} value={user.id}>{user.user_name}</MenuItem>
                  })}
                </Select>
              </FormControl>

              <div>
                <Grid container justifyContent={"center"}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      aligntext: "center",
                      mt: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      width: "20%",
                    }}
                    onClick={handleClick}
                  >
                    Publish
                  </Button>
                </Grid>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
