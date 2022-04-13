import { Link } from 'react-router-dom';
import { CoursesList } from './courses-list';
import { ShortcutTutor } from './shortcut-tutor';
import { User } from '../models/models';
import { ShortcutTeacher } from './shortcut-teacher';

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
          <CoursesList></CoursesList>
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
          <CoursesList></CoursesList>
        </div>
      </div>
    );
  }
  return (
    <div style={{ margin: 'auto' }}>
        <h2>Dashboard</h2>
        <div>
          <CoursesList></CoursesList>
        </div>
      </div>
  );
};
