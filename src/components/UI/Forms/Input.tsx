import { Fragment, FC, forwardRef } from 'react';

const Input = forwardRef<
  HTMLInputElement,
  {
    id: string;
    type: string;
    label?: string;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    required?: boolean;
  }
>(({ id, type, label, placeholder, minLength, maxLength, required }, ref) => {
  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <input
        className='form-control'
        id={id}
        type={type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        ref={ref}
      />
    </Fragment>
  );
});

export default Input;
