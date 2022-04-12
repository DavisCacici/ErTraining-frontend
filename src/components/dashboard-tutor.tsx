import { Link } from 'react-router-dom';
import { CoursesList } from './courses-list-tutor';
import { ShortcutTutor } from './shortcut-tutor';
import { User } from '../models/models';

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
          {/* <Link to="/">Go to the home page</Link> */}
          <ShortcutTutor></ShortcutTutor>
          <CoursesList></CoursesList>
        </div>
      </div>
    );
  }

  if (GLOBAL_USER.role === 'teacher') {
    return <></>;
  }
  return <></>;
};
