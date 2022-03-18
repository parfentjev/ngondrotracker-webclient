import { FC } from 'react';

const Button: FC<{
  type: string;
  onClick?: () => {};
  className?: string;
}> = ({ type, onClick, className, children }) => {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={className ? className : 'button button-primary'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
