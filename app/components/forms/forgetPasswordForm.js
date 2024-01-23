"use client"

import { Col, Form, Row, notification } from 'antd'
import React, { useState } from 'react'
import DocInput from '../common/docInput';
import DocButton from '../common/docButton';
import Image from 'next/image';
import Link from 'next/link';
import { useForgotPassword } from '@/app/hooks/auth';
import { getErrorFromApi } from '@/app/utils';


const ForgetPasswordForm = () => {
  const [form] = Form.useForm();
  const { mutate: forgotPassword } = useForgotPassword();
  const [loading, setLoading] = useState(false)

  const returnUrl = "https://mydoctracker-webapp-d50qursrz-espark-web-application-developme.vercel.app/auth/reset-password"

  const onFinish = (values) => {
    setLoading(true);
    const body = {
      ...values,
      host: returnUrl
    }
    forgotPassword(body,
      {
        onSuccess: (forgotPasswordSuccess) => {
          notification.success({
            message: 'Error',
            description: forgotPasswordSuccess?.message,
          })
          setLoading(false);
        },
        onError: (error) => {
          notification.error({
            message: 'Error',
            description: getErrorFromApi(error),
          })
          setLoading(false);
        }
      })
  };


  return (
    <div className='flex flex-col justify-center lg:h-[100%] h-[69vh] gap-5'>
      <div className='flex justify-center pb-4'>
        <div className='flex text-3xl text-secondary font-semibold w-fit mb-2'>
          <h6 className="border-b-4 border-secondary pb-1">Forg </h6><span> et</span> &nbsp; Password
        </div>
      </div>

      <div>
        <p className='text-greydark w-[100%] xl:w-[80%]'>Please enter your email address and we will send you instructions to reset your password.</p>
      </div>

      <div>
        <Form form={form} onFinish={onFinish}>
          <Row gutter={[0, 0]}>
            <Col span={24}>
              <Form.Item
                label={<span className='text-greydark text-xs font-medium'>Email</span>}
                name="email"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }} // Adjust the input column width
                rules={[{ required: true, message: "Please enter a valid email address" }]}
              >
                <DocInput type={"email"} placeholder="Enter Email"
                  onChange={(value) => form.setFieldsValue({ email: value })}
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

export default ForgetPasswordForm