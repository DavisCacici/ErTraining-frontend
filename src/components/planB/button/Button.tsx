import './button.scss';

interface ButtonProps {
  readonly onClick: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, children } = props;
  return <button onClick={onClick}>{children}</button>;
};
