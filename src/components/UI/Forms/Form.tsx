import { FC, FormEvent } from 'react';

const Form: FC<{ onSubmit: (event: FormEvent) => void }> = ({
  children,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
