import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
const props = {
  name: 'file',
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
  },
};



const DocImgInput = ({ placeholder, className }) => (
  <Upload className={`${className}`} {...props}>
    <Button size='large' className='border-2 border-grey-100' icon={<UploadOutlined />} >{placeholder}</Button>
  </Upload>
);
export default DocImgInput;