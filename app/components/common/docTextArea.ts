"use client"

import { Input } from 'antd'

const DocTextArea = ({ className, placeholder, onChange, value, rows }) => {
  const { TextArea } = Input;

  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  
  return (
    <TextArea
      rows={rows}
      className={`border-2 border-grey-100 h-[40px] rounded-[5px] ${className}`} 
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export default DocTextArea