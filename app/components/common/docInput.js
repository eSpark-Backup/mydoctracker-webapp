"use client"

import { Input, Space } from 'antd'
import { useState } from 'react'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'

const DocInput = ({ maxLength, type, className, placeholder, onChange, value, suffix, prefix,readOnly }) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };


  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };



  return (
    <Input value={value} className={`border-2 border-grey-100 h-[40px] rounded-[5px] ${className}`} 
    type={type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type} placeholder={placeholder} onChange={handleChange}
    readOnly={readOnly}
    maxLength={maxLength}
    prefix={prefix && prefix}
    suffix={
      suffix ||
      type === 'password' && (
        <Space
          onClick={handlePasswordVisibility}
          style={{ cursor: 'pointer' }}
        >
          {isPasswordVisible  ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </Space>
      )
    }
    
    />
  )
}

export default DocInput