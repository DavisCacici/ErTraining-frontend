import { Link } from "react-router-dom";
import { CoursesList } from "./courses-list";
import { ShortcutTutor } from "./shortcut-tutor";
import { User } from "../models/models";
import { ShortcutTeacher } from "./shortcut-teacher";
import { AddCourse } from "./add-course";
import { SetStateAction, useState } from "react";

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
  
  const [route, setRoute] = useState<string|undefined>();
  const [input, setInput] = useState({ title: "", description: "", participants: "" });

  const { GLOBAL_USER } = props;
  if (GLOBAL_USER.role === "tutor") {
    return (
      <div style={{ margin: "auto" }}>
        <h2>Dashboard</h2>
        <div>
          <ShortcutTutor></ShortcutTutor>
          <CoursesList GLOBAL_USER={GLOBAL_USER}></CoursesList>
        </div>
      </div>
    );
  }

  if (GLOBAL_USER.role === "teacher") {
    return (
      <div style={{ margin: "auto" }}>
        <h2>Dashboard</h2>
        <div>
          <ShortcutTeacher></ShortcutTeacher>
          {/* <CoursesList
            id={0}
            name={""}
            state={""}
            description={""}
          ></CoursesList> */}
          <CoursesList GLOBAL_USER={GLOBAL_USER}></CoursesList>
        </div>
      </div>
    );
  }
  return (
    <div style={{ margin: 'auto' }}>
      <h2>Dashboard</h2>
      <div>
        <CoursesList GLOBAL_USER={GLOBAL_USER}></CoursesList>
      </div>
    </div>
  );
};
