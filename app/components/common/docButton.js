"use client"
import { Button } from 'antd';
import React, { useState } from 'react';

const DocButton = ({ disabled, className, text, onClick, prefix, suffix, loading }) => {


  return (
    <Button
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      className={`bg-primary text-primary rounded-[50px] text-[18px] px-4 h-[40px] flex justify-center items-center hover:bg-primary ${className} `}
      type="primary"
    >
      {prefix && prefix}
      {text}
      {suffix && <span className="ml-2">{suffix}</span>}
    </Button>
  );
};

export default DocButton;
