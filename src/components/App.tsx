import logo from './logo.svg';
import './App.css';
import CorsiAttivi from './corsi-attivi';
import ShortcutComponent from './shortcut';


export const App: React.FunctionComponent = () =>{

  // Rendering
  return <CorsiAttivi></CorsiAttivi>;
}

export const Shortcut: React.FunctionComponent = () =>{
  return <ShortcutComponent></ShortcutComponent>;
}