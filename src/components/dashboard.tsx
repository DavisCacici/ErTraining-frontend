import { Link } from "react-router-dom";
import { ActiveCourses, CompletedCourses, CoursesList } from "./courses-list";
import { ShortcutTutor } from "./shortcut-tutor";
import { User } from "../models/models";
import { Course } from "../models/models";
import { ShortcutTeacher } from "./shortcut-teacher";
import { AddCourse } from "./add-course";
import { SetStateAction, useState } from "react";
import { CreateOrEditUser } from "./createOrEditUser";
import { Box, Typography, IconButton } from "@mui/material";
import RestartAltTwoToneIcon from '@mui/icons-material/RestartAltTwoTone';;

interface DashboardProps {
  GLOBAL_USER: User;
}

export interface AddCourseProps {
  input: <Props>() => ["input"];
  setInput: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      participants: string;
    }>
  >;
}


export const Dashboard: React.FC<DashboardProps> = (props) => {
  
  const [route, setRoute] = useState<string|undefined>(undefined);
  const [passingCourse, setPassingCourse] = useState<Course>();
  const [input, setInput] = useState({ title: "", description: "", participants: "" });

  const { GLOBAL_USER } = props;

  const routeBackToDashboard = () =>{
    setRoute(undefined);
    setPassingCourse(undefined);
  }

  const shortcutTutorRouteHandler = (s:string|undefined,c?:Course) => {
    setRoute(s);
    c?setPassingCourse(c):console.log();
  }


  const defineContent = () => {
    if(typeof(route) === 'undefined'){
      return(
      <CoursesList GLOBAL_USER={GLOBAL_USER} CallbackRoute={(s, c) => {shortcutTutorRouteHandler(s, c); console.log(c.name)}}></CoursesList>
      )
    } else if(route === 'activeCourses'){
      return(<ActiveCourses course={passingCourse}></ActiveCourses>)
    } else if(route === 'completedCourses'){
      return(<CompletedCourses course={passingCourse}></CompletedCourses>)
    } else if(route === 'addCourse'){
        return(<AddCourse course={passingCourse} CallbackRoute={routeBackToDashboard}></AddCourse>)
    } else if(route === 'addUser'){
      return(<CreateOrEditUser routeHandler={routeBackToDashboard}></CreateOrEditUser>)
    } else {
      alert("Questo è un problema")
    }
  }

  if (GLOBAL_USER.role === "tutor") {
    return (
      <div style={{ margin: "auto" }}>
        <Box display='flex' justifyContent='start' alignItems='end' >
          <Typography textAlign='left' variant="h4" sx={{ fontWeight: "bold" }}> Dashboard </Typography>
          <IconButton onClick={ () => {routeBackToDashboard()}} aria-label="edit">
            <RestartAltTwoToneIcon color="primary"></RestartAltTwoToneIcon>
          </IconButton>
        </Box>
        <div>
          <ShortcutTutor routingCallback={shortcutTutorRouteHandler}></ShortcutTutor>
          {defineContent()}
        </div>
      </div>
    );
  }

  if (GLOBAL_USER.role === "teacher") {
    return (
      <div style={{ margin: "auto" }}>
        <Box display='flex' justifyContent='start' alignItems='end' >
          <Typography textAlign='left' variant="h4" sx={{ fontWeight: "bold" }}> Dashboard </Typography>
          <IconButton onClick={ () => {routeBackToDashboard()}} aria-label="edit">
            <RestartAltTwoToneIcon color="primary"></RestartAltTwoToneIcon>
          </IconButton>
        </Box>
        <div>
          <ShortcutTeacher></ShortcutTeacher>
          <CoursesList GLOBAL_USER={GLOBAL_USER} CallbackRoute={(s, c)=>{}}></CoursesList>
        </div>
      </div>
    );
  }
  return (
    <div style={{ margin: 'auto' }}>
      <h2>Dashboard</h2>
      <div>
        <CoursesList GLOBAL_USER={GLOBAL_USER} CallbackRoute={(s, c)=>{}}></CoursesList>
      </div>
    </div>
  );
};
