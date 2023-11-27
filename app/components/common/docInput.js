import { Input, Space } from 'antd'
import React from 'react'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'

const DocInput = ({ type, className, placeholder, onChange, value }) => {
  const [isPasswordVisible, setPasswordVisibility] = React.useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };


  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };



  return (
    <Input className={`border-2 border-grey-100 h-[40px] rounded-[5px] ${className}`} 
    type={type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type} placeholder={placeholder} onChange={handleChange}
    suffix={
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