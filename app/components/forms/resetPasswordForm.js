"use client"

import { Col, Form, Row, notification } from 'antd'
import React, { useState } from 'react'
import DocInput from '../common/docInput';
import DocButton from '../common/docButton';
import Image from 'next/image';
import Link from 'next/link';
import { useChangePassword } from '@/app/hooks/auth';
import { getErrorFromApi } from '@/app/utils';
import { useRouter, useSearchParams } from 'next/navigation'
import { validatePassword } from '@/app/utils/validation';

const ResetPasswordForm = () => {
  const [form] = Form.useForm();
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const [loading, setLoading] = useState(false)
  const { mutate: changePassword } = useChangePassword();

  const onFinish = (values) => {
    setLoading(true);
    if (token) {
      if (values.password === values.confirmPassword) {
        changePassword({ payload: { newPassword: values.password }, token, reset: true },
          {
            onSuccess: (resetPasswordSuccess) => {
              notification.success({
                message: 'Error',
                description: resetPasswordSuccess?.message,
              })
              setLoading(false);
              router.push("/auth/signin")
            },
            onError: (error) => {
              notification.error({
                message: 'Error',
                description: getErrorFromApi(error),
              })
              setLoading(false);
            }
          })
      } else {
        notification.error({
          message: 'Error',
          description: 'Password does not match',
        })
      }
    } else {
      notification.error({
        message: 'Error',
        description: 'Token is required',
      })
    }
  };


  return (
    <div className='flex flex-col justify-center lg:h-[100%] h-[69vh] gap-5'>
      <div className='flex justify-center pb-4'>
        <div className='flex text-3xl text-secondary font-semibold w-fit mb-2'>
          <h6 className="border-b-4 border-secondary pb-1">Rese </h6><span> t</span> &nbsp; Password
        </div>
      </div>

      <div>
        <p className='text-greydark w-[100%] xl:w-[80%] text-sm'>Please create a new password</p>
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
                rules={[{ validator: validatePassword }]}
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
                rules={[
                  {
                    required: true,
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Password do not match!'));
                    },
                  }),
                ]}
                dependencies={["password"]}
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
            <Image className='md:w-[18px] w-[18px]' src={"/icons/backBlue.svg"} alt="logo" width={20} height={20} />
          </div>

          <div>
            <p className='underline text-sm font-medium text-[#126FAA]'>Back to Sign-In</p>
          </div>
        </div>
      </Link>
    </div>

  )
}

export default ResetPasswordForm