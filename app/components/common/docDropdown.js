"use client"

import Select from 'react-select'
import React from 'react'

const DocDropdown = ({ options, className, placeholder, onChange }) => {

  const handleChange = (e) => {
    onChange(e)
  };


  return (
    <div>
      <Select
        onChange={handleChange}
        placeholder={placeholder}
        options={options}
        className={`rounded-[5px] ${className}`}
        style={{ height: "40px" }}
      />
    </div>
  )
}

export default DocDropdown
