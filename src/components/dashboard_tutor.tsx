import { Link } from 'react-router-dom';
import {CorsiAttivi} from './corsi_attivi';

export const Dashboard: React.FC = () => {
  return (
    <div className="box">
      <h2>Dashboard!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
        <CorsiAttivi></CorsiAttivi>
      </p>
    </div>
  );
};
