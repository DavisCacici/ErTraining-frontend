import { Link } from 'react-router-dom';

export const NoMatch: React.FC = () => {
  return (
    <div className="box">
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};