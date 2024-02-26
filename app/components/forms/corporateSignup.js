"use client"

import { Checkbox, Col, Form, Row, notification } from 'antd';
import React, { useState } from 'react'
import DocInput from '../common/docInput';
import DocButton from '../common/docButton';
import { getErrorFromApi } from '@/app/utils';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useCorporateSignup } from '@/app/hooks/auth';
import { validatePassword, validateUsername } from '@/app/utils/validation';
import { authSignIn } from '@/app/redux/store/slices/authSlice';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const CorporateSignup = ({ HideHandler }) => {
  const [form] = Form.useForm();
  const { mutate: signUp } = useCorporateSignup();
  const dispatch = useDispatch()


  const onFinish = (values) => {
    console.log(values, "formvalues");
    signUp(values,
      {
        onSuccess: (signUpSuccess) => {
          console.log(signUpSuccess, "signUpSuccess")
          notification.success({
            message: 'Account Created',
            description: signUpSuccess?.message,
          })
          dispatch(authSignIn(signUpSuccess.data));
        },
        onError: (error) => {
          notification.error({
            message: 'Error',
            description: getErrorFromApi(error),
          })
        }
      })
  };


  return (
    <div className='flex flex-col justify-between h-full'>
      <div>
        <Form form={form} onFinish={onFinish}>
          <Row gutter={[10, 0]}>


            <>
              <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 24 }}>
                <Form.Item
                  label={<span className='text-greydark text-xs font-medium'>Company Name</span>}
                  name="companyName"
                  labelCol={{ span: 24 }}
                  style={{ marginBottom: "4px" }}
                  wrapperCol={{ span: 24 }} // Adjust the input column width
                  rules={[{ required: true, message: "Please Enter Company Name" }]}
                >
                  <DocInput type={"text"} placeholder="Enter company name"
                    onChange={(value) => form.setFieldsValue({ companyName: value })}
                  // value={form.getFieldValue('username')}
                  />
                </Form.Item>
              </Col>


              <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 24 }}>
                <Form.Item
                  label={<span className='text-greydark text-xs font-medium'>User Name</span>}
                  name="username"
                  labelCol={{ span: 24 }}
                  style={{ marginBottom: "4px" }}
                  wrapperCol={{ span: 24 }} // Adjust the input column width
                  // rules={[
                  //   { pattern: /^[a-z0-9_-]{1,}$/, message: "Username should only contain alphanumeric characters (letters and numbers), Small Letters, Underscores (_) and hyphens (-)." }
                  // ]}
                  rules={[{ validator: validateUsername }]}
                >
                  <DocInput type={"text"} placeholder="Enter Username"
                    onChange={(value) => form.setFieldsValue({ username: value })}
                  // value={form.getFieldValue('username')}
                  />
                </Form.Item>
              </Col>

              <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 24 }}>
                <Form.Item
                  label={<span className='text-greydark text-xs font-medium'>Company Email</span>}
                  name="email"
                  labelCol={{ span: 24 }}
                  style={{ marginBottom: "4px" }}
                  wrapperCol={{ span: 24 }} // Adjust the input column width
                  rules={[{ required: true, message: "Please Enter Company Email" },
                  { type: 'email', message: 'Please enter valid email' }]}
                >
                  <DocInput type={"email"} placeholder="Enter company email"
                    onChange={(value) => form.setFieldsValue({ email: value })}
                  // value={form.getFieldValue('username')}
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label={<span className='text-greydark text-xs font-medium'>Company Address</span>}
                  name="address"
                  labelCol={{ span: 24 }}
                  style={{ marginBottom: "4px" }}
                  wrapperCol={{ span: 24 }} // Adjust the input column width
                  rules={[{ required: true, message: "Please Enter Company Address" }]}
                >
                  <DocInput type={"text"} placeholder="Enter company address"
                    onChange={(value) => form.setFieldsValue({ companyAddress: value })}
                  // value={form.getFieldValue('username')}
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label={<span className='text-greydark text-xs font-medium'>Company Contact</span>}
                  name="contact"
                  labelCol={{ span: 24 }}
                  style={{ marginBottom: "4px" }}
                  wrapperCol={{ span: 24 }} // Adjust the input column width
                  rules={[{ required: true, message: "Please Enter Company Contact No." }]}
                >
                  {/* <DocInput type={"phone"} placeholder="Contact number"
                    onChange={(value) => form.setFieldsValue({ companyContact: value })}
                  // value={form.getFieldValue('username')}
                  /> */}
                  <PhoneInput
                    country={'us'}
                    onChange={(value) => form.setFieldsValue({ contact: value })}
                  />
                </Form.Item>
              </Col>


              <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
                <Form.Item
                  label={<span className='text-greydark text-xs font-medium'>Password</span>}
                  name="password"
                  labelCol={{ span: 24 }}
                  style={{ marginBottom: "4px" }}
                  wrapperCol={{ span: 24 }} // Adjust the input column width
                  rules={[{ validator: validatePassword }]}
                >
                  <DocInput type={"password"} placeholder="Enter password"
                    onChange={(value) => form.setFieldsValue({ password: value })}
                  />
                </Form.Item>

              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
                <Form.Item
                  label={<span className='text-greydark text-xs font-medium'>Confirm Password</span>}
                  name="confirmPassword"
                  labelCol={{ span: 24 }}
                  style={{ marginBottom: "4px" }}
                  wrapperCol={{ span: 24 }} // Adjust the input column width
                  // rules={[{ validator: validatePassword }]}
                  // validateTrigger="onBlur"
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
                  <DocInput type={"password"} placeholder="Confirm password"
                    onChange={(value) => form.setFieldsValue({ confirmPassword: value })}
                  />
                </Form.Item>

              </Col>

              <br />

              <Col span={24}>
                <Form.Item
                  name="rememberMe"
                  valuePropName="checked"
                  rules={[
                    { validator: (_, value) => value ? Promise.resolve() : Promise.reject('Please accept the terms and conditions') },
                  ]}
                  wrapperCol={{ span: 24 }}
                  className='2xl:!w-[65%] w-[100%]'
                >
                  <Checkbox className='auth-checkbox mt-2' >
                    <span className='text-[14px]'>
                      I have read and agreed to the <span className='text-primary font-semibold'>Privacy Policy</span> and <span className='text-primary  font-semibold'>Terms and conditions</span>
                    </span>
                  </Checkbox>
                </Form.Item>
              </Col>
            </>





          </Row>
        </Form>
      </div>

      <div>
        <DocButton onClick={form.submit} className={"!bg-primary text-white rounded-[50px] w-full text-[18px] border-none"} text={"Sign Up"} />
      </div>


      <div className='lg:hidden block'>
        <div className='py-8 flex flex-col items-center'>
          <p className='text-[12px] text-grey'>Already have an account?</p>
          <Link className='w-full flex justify-center' href={`/auth/signin`}>
            <DocButton className={"mt-3 bg-secondary text-primary rounded-[50px] w-7/12  text-[18px] border-none"} text={"Sign In"} />
          </Link>
        </div>
      </div>

    </div>
  )
}

export default CorporateSignup