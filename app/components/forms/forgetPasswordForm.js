"use client"

import { Col, Form, Row } from 'antd'
import React, { useState } from 'react'
import DocInput from '../common/docInput';
import DocButton from '../common/docButton';
import Image from 'next/image';
import Link from 'next/link';
import VerificationForm from '@/app/components/Forms/OtpForm';
import InputModal from '../common/InputModal';
import { useRouter } from 'next/navigation';


const ForgetPasswordForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false)
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const router = useRouter();


  const onFinish = (values) => {
    setLoading(true);
    // console.log('Received values of form: ', values);
    // console.log('Success:', values);
    setLoading(false);
  };
  const SubmitHandler = () => {
    form.submit()
    setIsVerificationModalOpen(true)
  }

  const HandleVerificationSuccess = () => {
    console.log("Pushhhh")
    // setIsVerificationModalOpen(false);
    router.push("/auth/reset-password")
  };

  const HandleVerificationCancel = () => {
    setIsVerificationModalOpen(false);
    console.log("cancel")
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
        <DocButton onClick={SubmitHandler} loading={loading} className={"!bg-primary text-white rounded-[50px] w-full text-[18px] border-none"} text={"Continue"} />
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
      <InputModal
        isModalOpen={isVerificationModalOpen}
        handleOk={()=>alert("Hello")}
        // handleOk={HandleVerificationSuccess}
        width={450}
        handleCancel={HandleVerificationCancel}
      >
        <VerificationForm handleCancel={HandleVerificationCancel} handleOk={HandleVerificationSuccess} auth={true}  />
      </InputModal>

    </div>

  )
}

export default ForgetPasswordForm