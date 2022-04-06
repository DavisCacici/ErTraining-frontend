import { Link } from 'react-router-dom';
import {ActiveCourses} from './active-courses';
import {ShortcutComponent} from './shortcut';

export const Dashboard: React.FC = () => {
  return (
    <div> 
      <h2>Dashboard</h2>
      <div>
        {/* <Link to="/">Go to the home page</Link> */}
        <ShortcutComponent></ShortcutComponent>
        <ActiveCourses></ActiveCourses>
      </div>
    </div>
  );
};
