import { IconButton } from "@mui/material";
import ArrowLeftTwoToneIcon from '@mui/icons-material/ArrowLeftTwoTone';

export const AddCourse: React.FC = () => {
  return (
    <div>
      <IconButton
        aria-label="edit"
        onClick={() => {
          console.log("torna indietro!");
        }}
        className="button"
        name="edit-button"
      >
        <ArrowLeftTwoToneIcon color="primary" />
      </IconButton>
      <h2>Add course</h2>
      <div></div>
    </div>
  );
};
