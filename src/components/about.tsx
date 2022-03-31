import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="box">
      <h2>About!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};
