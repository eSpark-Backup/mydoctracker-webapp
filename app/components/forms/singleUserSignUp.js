import { Checkbox, Col, Form, Input, Row } from 'antd';
import React from 'react'
import DocInput from '../common/docInput';
import DocButton from '../common/docButton';
import Link from 'next/link';

const SingleUserSignup = () => {
  const [form] = Form.useForm();




  const onFinish = (values) => {
    console.log(values, "SingleUserForm");
  };

  return (
    <div className='flex flex-col justify-between h-full'>
      <div>
        <Form form={form} onFinish={onFinish}>
          <Row gutter={[10, 0]}>
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
                label={<span className='text-greydark text-xs font-medium'>User Name</span>}
                name="userName"
                labelCol={{ span: 24 }}
                style={{ marginBottom: "4px" }}
                wrapperCol={{ span: 24 }} // Adjust the input column width
                rules={[{ required: true, message: "Please Enter User Name" }]}
              >
                <DocInput type={"text"} placeholder="Enter Username"
                  onChange={(value) => form.setFieldsValue({ userName: value })}
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
                rules={[{ required: true, message: "Please Enter Contact No." }, 
               ]}
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
                rules={[{ required: true, message: "Please Enter Password" }]}
              >
                <DocInput type={"password"} placeholder="Enter password"
                  onChange={(value) => form.setFieldsValue({ password: value })}
                />
              </Form.Item>

            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item
                label={<span className='text-greydark text-xs font-medium'>Confirm Password</span>}
                name="password"
                labelCol={{ span: 24 }}
                style={{ marginBottom: "4px" }}
                wrapperCol={{ span: 24 }} // Adjust the input column width
                rules={[{ required: true, message: "Please Enter Confirm Password" }]}
              >
                <DocInput type={"password"} placeholder="Confirm password"
                  onChange={(value) => form.setFieldsValue({ confirmPassword: value })}
                />
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
                <Checkbox >
                  <span className='text-[14px]'>
                    I have read and agreed to the <span className='text-primary font-semibold'>Privacy Policy</span> and <span className='text-primary  font-semibold'>Terms and conditions</span>
                  </span>
                </Checkbox>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>

      <div>
        <DocButton onClick={() => form.submit()} className={"!bg-primary text-white rounded-[50px] w-full text-[18px] border-none"} text={"Sign Up"} />
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

export default SingleUserSignup