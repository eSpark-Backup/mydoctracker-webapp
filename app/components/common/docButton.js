"use client"
import { Button, Spin } from 'antd';
import React, { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const DocButton = ({ style, disabled, className, text, onClick, prefix, suffix, loading, loadingColor }) => {


  return (
    <button
      style={style}
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      className={`bg-secondary text-primary rounded-[50px] text-[18px] px-4 h-[40px] flex justify-center items-center  ${className} `}
      type="primary"
    >
      {prefix && prefix}
      {loading ? <Spin indicator={<LoadingOutlined style={{ color: loadingColor || "#fff", fontSize: 15 }} spin />} /> : text}
      {suffix && <span className="ml-2">{suffix}</span>}
    </button>
  );
};

export default DocButton;
