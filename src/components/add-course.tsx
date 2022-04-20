import {
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
import { addCourse, usersList, addUsersCourse, getUsersCourse } from "../apis/tutor_call";

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
  // readonly GLOBAL_USER: User;
  readonly course?: Course;
}

export const AddCourse: React.FC<Props> = (props) => {
  
  const [input, setInput] = useState({
    title: "",
    description: "",
  });
  const [partecipants, setPartecipants] = useState<User[]>([]);
  const [partecipant, setPartecipant] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    usersList().then((res: any) =>setUsers(res.data.data as User[])).catch((err)=>console.log(err));
    console.log(props.course);
    if(props.course)
    {
      setInput(prev => ({...prev, title: props.course!.name, description: props.course!.description}))
      getUsersCourse(props.course.id).then((res: any) => {
        setPartecipants(res.data.data as User[]);
      }).catch((err)=>console.log(err));
      
    }
  }, []);

  // const getIdsUsers = (uList:User[]) => {
  //   let outputList:any[] = [];
  //   uList.forEach((u) =>{ outputList.push(u.id)});
  //   return outputList; 
  // }

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>): void => {

    setInput(prev => ({...prev, [e.target.name]: e.target.value}));    
    // console.log(input);
  };
  
  const handleClick = async () => {
    try{
      var response = await addCourse(input.title, input.description);
      if(partecipants.length > 0 )
      {
        // addUsersCourse(response.data.data.id, partecipants).then((res)=>console.log(res)).catch((err)=>console.log(err));
      }
    }
    catch(e){
      console.log(e);
    }
    
    // console.log(participants);
    
  };

  const handleChangeSelect = async (e: SelectChangeEvent) => {
    setPartecipant(e.target.value);
    partecipants.find((p) => {
      if(p.id.toString() !== e.target.value)
      {
        const element = users.filter(element => element.id === p.id);
        console.log(element);
        setPartecipants(prev =>[...prev, element[0]]);
      }
    });
    // users.find((element) => {
    //   if(element.id.toString() == e.target.value)
    //   {
        
    //   }
    // });
    // setPartecipants(prev => [...prev, e.target.value]);
    // setPartecipants(
    //   typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value,
    // );
    // console.log(e.target.value);
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
              {/* <FormControl fullWidth sx={{  minWidth: 120 }} size="small">
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={partecipants}
                  onChange={handleChangeSelect}
                >
      
                  {_.map(users, (user, index) => {
                    return <MenuItem autoFocus={true} key={index} value={user.id}>{user.user_name}</MenuItem>
                  })}
                </Select>
              </FormControl> */}
              <FormControl fullWidth sx={{  minWidth: 120 }} size="small">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={partecipant}
                  onChange={handleChangeSelect}
                >
      
                  {_.map(users, (user, index) => {
                    return <MenuItem key={index} value={user.id}>{user.user_name}</MenuItem>
                  })}
                </Select>
              </FormControl>
              <Grid container spacing={2}>
              {partecipants.map((user, index) => {
                return <Grid item xs={2}>
                <Item>
                  {user.user_name}
                  <IconButton 
                  aria-label="delete"
                  onClick={() => {
                    const newValue = partecipants.filter(element => element.id !== user.id)
                    setPartecipants(newValue);
                  }}>
                    <DeleteTwoToneIcon />
                  </IconButton>
                </Item>
                </Grid>
              })}
              </Grid>

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
