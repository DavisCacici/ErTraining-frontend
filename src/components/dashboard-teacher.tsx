import {CoursesList} from './courses-list-tutor';
import { ShortcutTeacher } from './shortcut-teacher';

export const Dashboard: React.FC = () => {
  return (
    <div> 
      <h2>Dashboard</h2>
      <div>
        <ShortcutTeacher></ShortcutTeacher>
        <CoursesList></CoursesList>
      </div>
    </div>
  );
};