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
import "./add-course.scss";
import { Props, useState } from "react";
import { Course as CourseModel } from "../models/models";
import React from "react";

// FIXME: nella card che contiene il form aggiungere barra di scorrimento per quando
// la descrizione è multilinea, altrimenti il bottone Publish scompare sotto.

interface AddCourseProps {
  input?: () => ["input"];
  setInput?: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      participants: string;
    }>
  >;
}

export const AddCourse: React.FC<AddCourseProps> = (props) => {
   

  const [input, setInput] = useState({
    title: "",
    description: "",
    participants: "",
  });

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>): void => {

    setInput(prev => ({...prev, [e.target.name]: e.target.value}));    
  };
  
  const handleClick = (): void => {
    if (!input.title || !input.description || !input.participants) {
      return;
    }
  
    setInput({
      ...input,
      title: input.title,
      description: input.description,
      participants: input.participants,
    });
  };

  const [participants, setParticipants] = React.useState('');

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setParticipants(event.target.value);
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
              {/*value={input.participants}*/}
              <FormControl fullWidth sx={{  minWidth: 120 }} size="small">
                <Select
                  labelId="simple-select-label"
                  id="simple-select"
                  defaultValue={"1"}
                  
                  onChange={handleChangeSelect}
                >
                  <MenuItem value={1}>Davis Cacici</MenuItem>
                  <MenuItem value={2}>Marco Villa</MenuItem>
                  <MenuItem value={3}>Leonardo Garuti</MenuItem>
                  <MenuItem value={4}>Alexandro Burgagni</MenuItem>
                  <MenuItem value={5}>Melania Tizzi</MenuItem>
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
