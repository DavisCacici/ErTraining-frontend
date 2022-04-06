import {ActiveCourses} from './active-courses';

export const Dashboard: React.FC = () => {
  return (
    <div> 
      <h2>Dashboard</h2>
      <div>
        <ActiveCourses></ActiveCourses>
      </div>
    </div>
  );
};