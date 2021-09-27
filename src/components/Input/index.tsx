import React , {  InputHTMLAttributes } from "react";

import './styles.css'

interface InputProrps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  label: string;
}

const Input: React.FC<InputProrps> = ({ label, name, ...rest}) => {
  return (
    <div className="input-block">
    <label htmlFor={name}>{label}</label>
    <input id={name} {...rest} />
  </div>
  )
}

export default Input