"use client";


import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';



const DocImgInput = ({ placeholder, className, width, props }) => {

  return (

    <>
      <Upload accept='image/*' className={`${className} color-primary`} {...props} >
        <Button size='large' icon={<UploadOutlined />} style={{ width, color: "#002F49", fontSize: "14px" }}>Upload Image</Button>
      </Upload>
    </>
  )
}
export default DocImgInput;