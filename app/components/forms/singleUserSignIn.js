"use client"
import { Checkbox, Col, Form, Input, Row, notification } from 'antd';
import React, { useEffect, useState } from 'react'
import DocInput from '../common/docInput';
import DocButton from '../common/docButton';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { authSignIn } from '@/app/redux/store/slices/authSlice';
import { useRouter } from 'next/navigation'
import { useLogin } from '@/app/hooks/auth';
import { getErrorFromApi } from '@/app/utils';

const SingleUserSignIn = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { role, roleType } = useSelector(state => state.auth)
  const { mutate: login } = useLogin();

  const onFinish = (values) => {
    setLoading(true);
    login(values, {
      onSuccess: (loginSuccess) => {
        dispatch(authSignIn(loginSuccess.data));
        setLoading(false);
      },
      onError: (error) => {
        dispatch(authSignIn(values));
        notification.error({
          message: 'Error',
          description: getErrorFromApi(error),
        })
        setLoading(false);
      }
    })
    // Let's check redux and update next steps
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
          <Row gutter={[0, 0]}>
            <Col span={24}>
              <Form.Item
                label={<span className='text-greydark text-xs font-medium'>Username</span>}
                name="username"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }} // Adjust the input column width
                rules={[{ required: true, message: "Please Enter User Name" }]}
              >
                <DocInput type={"text"} placeholder="Enter User name"
                  onChange={(value) => form.setFieldsValue({ username: value })}
                // value={form.getFieldValue('username')}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label={<span className='text-greydark text-xs font-medium'>Password</span>}
                name="password"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }} // Adjust the input column width
                rules={[{ required: true, message: "Please Enter Password" }]}
              >
                <DocInput type={"password"} placeholder="Enter Password"
                  onChange={(value) => form.setFieldsValue({ password: value })}
                />
              </Form.Item>

            </Col>

            <Col span={24} className='pb-4'>
              <Link href={"/auth/forget-password"}>
                <span className='text-grey font-semibold'> Forgot Password? </span></Link>
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
                    I have read and agreed to the <span className='text-primary font-semibold'>Privacy Policy</span> and <br /> <span className='text-primary  font-semibold'>Terms and conditions</span>
                  </span>
                </Checkbox>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>

      <div>
        <DocButton onClick={() => form.submit()} loading={loading} className={"!bg-primary text-white rounded-[50px] w-full text-[18px] border-none"} text={"Sign In"} />

        <div className='lg:hidden block'>
          <div className='py-8 flex flex-col items-center'>
            <p className='text-[12px] text-grey'>Already have an account?</p>
            <Link className='w-full flex justify-center' href={`/auth/signup`}>
              <DocButton className={"mt-3 bg-secondary text-primary rounded-[50px] w-7/12  text-[18px] border-none"} text={"Sign Up"} />
            </Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default SingleUserSignIn