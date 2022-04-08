import {CoursesList} from './courses-list-tutor';

export const Dashboard: React.FC = () => {
  return (
    <div> 
      <h2>Dashboard</h2>
      <div>
        <CoursesList></CoursesList>
      </div>
    </div>
  );
};