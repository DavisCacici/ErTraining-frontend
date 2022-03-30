import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="box">
      <h2>Home!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};
