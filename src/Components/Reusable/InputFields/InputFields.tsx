import React from 'react'

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
const InputFields = ({label,name,placeholder,type,value,}) => {
  return (
    <div className='flex flex-col space-x-2'>
        <label>{name}</label>
        <input
        />
       <p>{error}</p>
    </div>
  )
}

export default forwordRef(InputFields)