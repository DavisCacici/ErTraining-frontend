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
import FileUploadTwoToneIcon from '@mui/icons-material/FileUploadTwoTone';
import "./add-course.scss";
import { useState } from "react";

// TODO: aggiungere il componente per caricare il .csv con gli iscritti (UploadButton).

// FIXME: nella card che contiene il form aggiungere barra di scorrimento per quando 
// la descrizione è multilinea, altrimenti il bottone Publish scompare sotto.

const Input = styled('input')({
  display: 'none',
});

// Bottone di Upload per il caricamento di file .csv con i dati dei partecipanti
export const UploadButton: React.FC = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <FileUploadTwoToneIcon />
        </IconButton>
      </label>
    </Stack>
  );
}

export const AddCourse: React.FC = () => {
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
                size= "small"
                helperText="* Please note this is a required field"
                sx={{ width: "100%", mb: 3 }}
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
                size= "small"
                // value={value}
                // onChange={handleChange}
                variant="filled"
                sx={{ width: "100%", mb: 3 }}
              />
              <Typography gutterBottom variant="h5" component="h2">
                <div className="add-course-form">Participants</div>
              </Typography>
              <TextField
                id="filled-basic"
                label="Add or upload participants"
                variant="filled"
                size= "small"
                // helperText="Add or upload participants"
                sx={{ width: "100%", mb: 2 }}
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
                    onClick={() => {
                      console.log("Publish course premuto!");
                    }}
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
