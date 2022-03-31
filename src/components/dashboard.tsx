import { Link } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  return (
    <div className="box">
      <h2>Dashboard!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};
