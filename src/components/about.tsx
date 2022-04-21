import { Link } from 'react-router-dom';
import { Game } from './planB/game';

export const About: React.FC = () => {
  return (
    <div className="box">
      <h2>About!</h2>
      {/* <Game /> */}
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};
