"use client"
import { Checkbox, Col, Form, Input, Row, notification } from 'antd';
import React, { useEffect, useState } from 'react'
import DocInput from '../common/docInput';
import DocButton from '../common/docButton';
import Link from 'next/link';
import { useSignup } from '@/app/hooks/auth';
import { getErrorFromApi } from '@/app/utils';
import { useDispatch, useSelector } from 'react-redux';
import { authSignIn } from '@/app/redux/store/slices/authSlice';
import { validatePassword, validateUsername } from '@/app/utils/validation';
import { useRouter } from 'next/navigation';

const SingleUserSignup = () => {
  const [form] = Form.useForm();
  const { mutate: signUp } = useSignup();
  const dispatch = useDispatch()
  const { role, roleType } = useSelector(state => state.auth)
  const router = useRouter()

  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    signUp(values,
      {
        onSuccess: (signUpSuccess) => {
          console.log(signUpSuccess, "signUpSuccess")
          notification.success({
            message: 'Account Created',
            description: signUpSuccess?.message,
          })
          dispatch(authSignIn(signUpSuccess.data));
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

  useEffect(() => {
    if (role) {
      if (role === "admin") {
        router.push("/dashboard/admin")
      } else if (role === "employee" && roleType === "admin") {
        router.push("/dashboard/employee-as-admin")
      } else {
        router.push("/dashboard/devices")
      }
    }
  }, [role, roleType])



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
                label={<span className='text-greydark text-xs font-medium'>Address</span>}
                name="address"
                labelCol={{ span: 24 }}
                style={{ marginBottom: "4px" }}
                wrapperCol={{ span: 24 }} // Adjust the input column width
                rules={[{ required: true, message: "Please Enter Address" }]}
              >
                <DocInput type={"text"} placeholder="Enter address"
                  onChange={(value) => form.setFieldsValue({ address: value })}
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
          </Row>
        </Form>
      </div>

      <div>
        <DocButton onClick={() => form.submit()} loading={loading} className={"!bg-primary text-white rounded-[50px] w-full text-[18px] border-none"} text={"Sign Up"} />
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