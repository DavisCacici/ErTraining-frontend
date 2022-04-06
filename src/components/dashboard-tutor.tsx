import { Link } from 'react-router-dom';
import {CorsiAttivi} from './corsi-attivi';
import {ShortcutComponent} from './shortcut';

export const Dashboard: React.FC = () => {
  return (
    // nel div qui sotto c'era un className="box"
    <div> 
      <h2>Dashboard</h2>
      <div>
        {/* <Link to="/">Go to the home page</Link> */}
        <ShortcutComponent></ShortcutComponent>
        <CorsiAttivi></CorsiAttivi>
      </div>
    </div>
  );
};
