"use client"
import React from 'react';
import Image from "next/image"
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Select, Space, Input, Flex, Row } from 'antd';

const Dashboard = () => {

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className='flex justify-center items-center flex-col' style={{ minHeight: '97vh' }}>
      <Row>
        Hello world
      </Row>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}>
        <div className='flex flex-col items-center justify-center'>
          <img src='/assets/images/NoData.png' />
          <p className='mt-3'>You don’t have any employee. Please add  to continue further.</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
