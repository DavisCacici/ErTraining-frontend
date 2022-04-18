import {
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import ArrowLeftTwoToneIcon from "@mui/icons-material/ArrowLeftTwoTone";
import FileUploadTwoToneIcon from "@mui/icons-material/FileUploadTwoTone";
import "./add-course.scss";
import { Props, useState } from "react";
import { Course as CourseModel } from "../models/models";

// TODO: aggiungere il componente per caricare il .csv con gli iscritti (UploadButton).

// FIXME: nella card che contiene il form aggiungere barra di scorrimento per quando
// la descrizione è multilinea, altrimenti il bottone Publish scompare sotto.

interface AddCourseProps {
  input: () => ["input"];
  setInput: React.Dispatch<
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {

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

  return (
    <div>
      <h2>Add course</h2>
      <div>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" sx={{ mt: 2 }}>
              <div className="add-course-form">Course title</div>
            </Typography>
            <form>
              <TextField
                required
                id="filled-basic"
                label="Add course title"
                variant="filled"
                size="small"
                helperText="* Please note this is a required field"
                sx={{ width: "100%", mb: 3 }}
                // value={{input.title}}
                onChange={handleChange}
                name="title"
              />
              <Typography gutterBottom variant="h5" component="h2">
                <div className="add-course-form">Description</div>
              </Typography>
              <TextField
                id="filled-multiline-flexible"
                label="Add a description"
                // helperText="Add a course description"
                multiline
                maxRows={4}
                size="small"
                // value={value}
                // onChange={handleChange}
                variant="filled"
                sx={{ width: "100%", mb: 3 }}
                // value={{ input.description }}
                onChange={handleChange}
                name="description"
              />
              <Typography gutterBottom variant="h5" component="h2">
                <div className="add-course-form">Participants</div>
              </Typography>
              <TextField
                id="filled-basic"
                label="Add or upload participants"
                variant="filled"
                size="small"
                // helperText="Add or upload participants"
                sx={{ width: "100%", mb: 2 }}
                // value={{ input.participants }}
                onChange={handleChange}
                name="participants"
              />
              {/* <UploadButton></UploadButton> */}
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
