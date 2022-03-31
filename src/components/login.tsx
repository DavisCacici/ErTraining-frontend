import { Link } from 'react-router-dom';

interface LoginProps {
  readonly onLogin?: () => void;
}

export const Login: React.FC<LoginProps> = (props) => {
  const { onLogin } = props;
  return (
    <div className="box">
      <h2>Login!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
      <p>
        <button onClick={onLogin}>LOGIN</button>
      </p>
    </div>
  );
};
