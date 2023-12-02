"use client"
import React from 'react';
import Image from "next/image"
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Select, Space, Input, Flex, Row } from 'antd';
// import FIlterIcon from "/assets/icons/Filter.svg"

const Dashboard = () => {

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className='flex justify-center items-center flex-col' style={{ minHeight: '97vh' }}>
      <Row>
        Hello world
      </Row>
      {/* <div className='container flex items-center justify-between mx-auto mt-5'>
        <div style={{ flex: 1 }}>
          <Input size="large" className='col-12 rounded-full px-4 py-2 focus:outline-none focus:border-blue-500 border-1 border-gray-300' placeholder="Search by name or tracker ID..." prefix={<SearchOutlined style={{ color: "#666666" }} />} />
        </div>
        <Flex>
          <Button style={{ background: '#002F49' }} type="primary"><Image src="/assets/icons/Filter.svg" width={20} height={15} /></Button>
          <Button className='mx-4' style={{ background: '#002F49' }} type="primary" icon={<PlusOutlined />}>Add</Button>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </Flex>
      </div> */}
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
