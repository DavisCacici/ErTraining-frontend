import { Link } from 'react-router-dom';

export const Profile: React.FC = () => {
  return (
    <div className="box">
      <h2>Profile!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};
