"use client"

import { Button, Checkbox, Col, Form, Row, Typography } from 'antd';
import React, { useState } from 'react'
import DocInput from '../common/docInput';
import DocButton from '../common/docButton';
import Link from 'next/link';
import Image from 'next/image';

const CorporateSignup = ({ HideHandler }) => {
  const [form] = Form.useForm();
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});
  const [heading, setHeading] = useState("Admin Details")

  const onFinish = (values) => {
    if (step === 1) {
      setFormValues({ ...formValues, ...values });
      setHeading("Company Details")
      HideHandler();
      setStep(2);
    } else {
      const formPayload = { ...formValues, ...values }
      setFormValues(formPayload);
      console.log(formPayload, "<====formPayload")
    }
  };

  const passwordValidator = (_, value) => {
    if (value !== form.getFieldValue('password')) {
      return Promise.reject('The two passwords do not match');
    }
    return Promise.resolve();
  };

  return (
    <div className='flex flex-col justify-between h-full'>
      <div>
        <Form form={form} onFinish={onFinish}>
          <h2 className='text-center text-primary text-xl font-semibold mb-5 mt-2'>{heading}</h2>
          <Row gutter={[10, 0]}>
            {step === 1 && (
              <>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
                  <Form.Item
                    label={<span className='text-greydark text-xs font-medium'>First Name</span>}
                    name="firstName"
                    labelCol={{ span: 24 }}
                    style={{ marginBottom: "4px" }}
                    wrapperCol={{ span: 24 }} // Adjust the input column width
                    rules={[{ required: true, message: "Please Enter First Name" }]}
                  >
                    <DocInput type={"text"} placeholder="Enter First name"
                      onChange={(value) => form.setFieldsValue({ firstName: value })}
                    // value={form.getFieldValue('username')}
                    />
                  </Form.Item>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
                  <Form.Item
                    label={<span className='text-greydark text-xs font-medium'>Last Name</span>}
                    name="lastName"
                    labelCol={{ span: 24 }}
                    style={{ marginBottom: "4px" }}
                    wrapperCol={{ span: 24 }} // Adjust the input column width
                    rules={[{ required: true, message: "Please Enter First Name" }]}
                  >
                    <DocInput type={"text"} placeholder="Enter last name"
                      onChange={(value) => form.setFieldsValue({ lastName: value })}
                    // value={form.getFieldValue('username')}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label={<span className='text-greydark text-xs font-medium'>Email</span>}
                    name="email"
                    labelCol={{ span: 24 }}
                    style={{ marginBottom: "4px" }}
                    wrapperCol={{ span: 24 }} // Adjust the input column width
                    rules={[{ required: true, message: "Please Enter Email" },
                    { type: 'email', message: 'Please enter valid email' }
                    ]}
                  >
                    <DocInput type={"email"} placeholder="Enter Email"
                      onChange={(value) => form.setFieldsValue({ email: value })}
                    // value={form.getFieldValue('username')}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label={<span className='text-greydark text-xs font-medium'>Contact</span>}
                    name="contact"
                    labelCol={{ span: 24 }}
                    style={{ marginBottom: "4px" }}
                    wrapperCol={{ span: 24 }} // Adjust the input column width
                    rules={[{ required: true, message: "Please Enter Contact No." }]}
                  >
                    <DocInput type={"tel"} placeholder="Contact number"
                      onChange={(value) => form.setFieldsValue({ contact: value })}
                    // value={form.getFieldValue('username')}
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
                    rules={[{ required: true, message: "Please Enter Password", validator: passwordValidator }]}
                  >
                    <DocInput type={"password"} placeholder="Enter Password"
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
                    rules={[{ required: true, message: "Please Enter Confirm Password", validator: passwordValidator }]}
                  >
                    <DocInput type={"password"} placeholder="Confirm password"
                      onChange={(value) => form.setFieldsValue({ confirmPassword: value })}
                    />
                  </Form.Item>

                </Col>


              </>
            )}

            {step === 2 && (
              <>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
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

                <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
                  <Form.Item
                    label={<span className='text-greydark text-xs font-medium'>Company Email</span>}
                    name="companyEmail"
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
                    name="companyAddress"
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
                    name="companyContact"
                    labelCol={{ span: 24 }}
                    style={{ marginBottom: "4px" }}
                    wrapperCol={{ span: 24 }} // Adjust the input column width
                    rules={[{ required: true, message: "Please Enter Company Contact No." }]}
                  >
                    <DocInput type={"phone"} placeholder="Contact number"
                      onChange={(value) => form.setFieldsValue({ companyContact: value })}
                    // value={form.getFieldValue('username')}
                    />
                  </Form.Item>
                </Col>

                <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
                  <Form.Item
                    label={<span className='text-greydark text-xs font-medium'>Enter Subsidiary</span>}
                    name="subsidiary"
                    labelCol={{ span: 24 }}
                    // style={{ marginBottom: "20px" }}
                    wrapperCol={{ span: 24 }} // Adjust the input column width
                    rules={[{ required: true, message: "Please Enter Subsidiary" }]}
                  >
                    <div className='flex gap-x-4'>
                      <DocInput type={"password"} placeholder="Enter name"
                        onChange={(value) => form.setFieldsValue({ subsidiary: value })}
                      />
                      <Button className='h-[39px] bg-secondary border-none flex justify-center items-center'>
                      <Image src={"/icons/AddWhite.svg"} width={20} height={20}/>
                      </Button>

                    </div>

                  </Form.Item>



                </Col>

                <Col span={24}>
                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      { validator: (_, value) => value ? Promise.resolve() : Promise.reject('Please accept the terms and conditions') },
                    ]}
                    wrapperCol={{ span: 24 }}
                  >
                    <Checkbox className='auth-checkbox' >
                      <span className='text-[14px]'>
                        I have read and agreed to the <span className='text-primary font-semibold'>Privacy Policy</span> and <br/><span className='text-primary  font-semibold'>Terms and conditions</span>
                      </span>
                    </Checkbox>
                  </Form.Item>
                </Col>
              </>
            )}




          </Row>
        </Form>
      </div>

      <div>
        <DocButton onClick={form.submit} className={"!bg-primary text-white rounded-[50px] w-full text-[18px] border-none"} text={step === 1 ? "Next" : "Sign In"} />
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