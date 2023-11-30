import { Select } from 'antd'
import React from 'react'

const DocDropdown = ({options, className, placeholder}) => {
  return (
    <div>
      <Select
          placeholder={placeholder}
          options={options}
          className={`rounded-[5px] ${className}`}
          style={{height:"40px"}}
        />
    </div>
  )
}

export default DocDropdown
