import React, { forwardRef } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface InputFieldsProps {
  label: string;
  name: string;
  error?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: any;
  isDisabled?: boolean;
}

// Forwarding the ref for react-hook-form compatibility
const InputFields = forwardRef<HTMLInputElement, InputFieldsProps>(
  ({ label, name, placeholder, type = "text", value, onChange, defaultValue, isDisabled, error }, ref) => {
    return (
      <div className="flex flex-col space-y-1">
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          ref={ref}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          disabled={isDisabled}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 "
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

export default InputFields;