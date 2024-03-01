"use client"

import Select from 'react-select'
import React from 'react'

const DocDropdown = ({ options, className, placeholder, onChange, defaultValue, value, isDisabled }) => {

  const handleChange = (e) => {
    onChange(e)
  };


  return (
    <div>
      <Select
        isDisabled={isDisabled || false}
        isSearchable={false}
        onChange={handleChange}
        placeholder={placeholder}
        options={options}
        className={`rounded-[5px] ${className}`}
        styles={{
          height: "40px",
          padding: "0px",
          option: (baseStyles, state) => ({
            ...baseStyles,
            color: "#666",
            background: state.isSelected && "#FEE5B7",
            borderBottom: state.isSelected && "1px solid #fcbf4a",
            borderRight: state.isSelected && "1px solid #fcbf4a",
            borderLeft: state.isSelected && "3px solid #fcbf4a",
            "&:hover": { background: '#FEE5B7', fontSize: "17px" },
          }),
        }}
        value={value || defaultValue}
      />
    </div>
  )
}

export default DocDropdown
