import React , {  SelectHTMLAttributes } from "react";
import { formatWithOptions } from "util";

import './styles.css'

interface SelectProrps extends SelectHTMLAttributes<HTMLSelectElement>{
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProrps> = ({ label, name, options, ...rest}) => {
  return (
    <div className="select-block">
    <label htmlFor={name}>{label}</label>
    <select defaultValue="Selecione uma opção" id={name} {...rest}>{
        options.map( option => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        })
      }
      
      <option value="" disabled hidden >Selecione uma opção</option>
    </select>
  </div>
  )
}

export default Select