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



const DocImgInput = ({placeholder,className}) => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />} className={`${className}`}>{placeholder}</Button>
  </Upload>
);
export default DocImgInput;