"use client"

import { Col, Form, Row } from 'antd'
import React, { useState } from 'react'
import DocInput from '../common/docInput';
import DocButton from '../common/docButton';
import Image from 'next/image';
import Link from 'next/link';

const ResetPasswordForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false)

  const onFinish = (values) => {
    setLoading(true);
    console.log('Received values of form: ', values);
    console.log('Success:', values);
    setLoading(false);
  };


  return (
    <div className='flex flex-col justify-center lg:h-[100%] h-[69vh] gap-5'>
      <div className='flex justify-center pb-4'>
        <div className='flex text-3xl text-secondary font-semibold w-fit mb-2'>
          <h6 className="border-b-4 border-secondary pb-1">Rese </h6><span> t</span> &nbsp; Password
        </div>
      </div>

      <div>
        <p className='text-greydark w-[100%] xl:w-[80%]'>Please create a new password</p>
      </div>

      <div>
        <Form form={form} onFinish={onFinish}>
          <Row gutter={[0, 0]}>
            <Col span={24}>
              <Form.Item
                label={<span className='text-greydark text-xs font-medium'>New Password</span>}
                name="password"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }} // Adjust the input column width
                rules={[{ required: true, message: "Please enter a new password" }]}
              >
                <DocInput type={"password"} placeholder="Enter Password"
                  onChange={(value) => form.setFieldsValue({ password: value })}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label={<span className='text-greydark text-xs font-medium'>Confirm Password</span>}
                name="confirmPassword"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }} // Adjust the input column width
                rules={[{ required: true, message: "Please re-enter a new password" }]}
              >
                <DocInput type={"password"} placeholder="Enter Confirm Password"
                  onChange={(value) => form.setFieldsValue({ confirmPassword: value })}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>

      <div>
        <DocButton onClick={() => form.submit()} loading={loading} className={"!bg-primary text-white rounded-[50px] w-full text-[18px] border-none"} text={"Continue"} />
      </div>

        <Link href={"/auth/signin"}>
      <div className='flex items-center'>
        <div>
          <Image className='md:w-[18px] w-[18px]' src={"/icons/forget-password-back-btn.svg"} alt="logo" width={20} height={20} />
        </div>
    
        <div>
          <p className='underline text-primary text-xs font-medium'>Back to Sign-In</p>
        </div>
      </div>
        </Link>
    </div>

  )
}

export default ResetPasswordForm