import { Link } from 'react-router-dom';
import { CoursesList } from './courses-list';
import { ShortcutTutor } from './shortcut-tutor';
import { User } from '../models/models';
import { ShortcutTeacher } from './shortcut-teacher';
import { AddCourse } from './add-course';

interface DashboardProps {
  GLOBAL_USER: User;
}

export const Dashboard: React.FC<DashboardProps> = (props) => {
  const { GLOBAL_USER } = props;
  if (GLOBAL_USER.role === 'tutor') {
    return (
      <div style={{ margin: 'auto' }}>
        <h2>Dashboard</h2>
        <div>
          <ShortcutTutor></ShortcutTutor>
          <CoursesList GLOBAL_USER={GLOBAL_USER}></CoursesList>
          {/* <AddCourse></AddCourse> */}
        </div>
      </div>
    );
  }

  if (GLOBAL_USER.role === 'teacher') {
    return (
      <div style={{ margin: 'auto' }}>
        <h2>Dashboard</h2>
        <div>
          <ShortcutTeacher></ShortcutTeacher>
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
