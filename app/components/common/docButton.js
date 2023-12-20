"use client"
import { Button } from 'antd';
import React, { useState } from 'react';

const DocButton = ({ disabled, className, text, onClick, prefix, suffix, loading }) => {


  return (
    <button
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      className={`bg-secondary text-primary rounded-[50px] text-[18px] px-4 h-[40px] flex justify-center items-center  ${className} `}
      type="primary"
    >
      {prefix && prefix}
      {text}
      {suffix && <span className="ml-2">{suffix}</span>}
    </button>
  );
};

export default DocButton;
