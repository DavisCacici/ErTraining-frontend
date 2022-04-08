import { Link } from 'react-router-dom';
import { CoursesList } from './courses-list-tutor';
import { ShortcutTutor } from './shortcut-tutor';

export const Dashboard: React.FC = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        {/* <Link to="/">Go to the home page</Link> */}
        <ShortcutTutor></ShortcutTutor>
        <CoursesList></CoursesList>
      </div>
    </div>
  );
};
