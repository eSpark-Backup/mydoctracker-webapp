import { Input } from 'antd'
import React from 'react'

const DocInput = ({type, className, placeholder, onChange, value }) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <Input className={`border-2 border-grey-100 h-[40px] rounded-[5px] ${className}`} type={type} placeholder={placeholder} onChange={handleChange} />
  )
}

export default DocInput