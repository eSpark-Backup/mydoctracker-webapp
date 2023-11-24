import { Checkbox, Col, Form, Input, Row } from 'antd';
import React from 'react'
import DocInput from '../../common/docInput';
import DocButton from '../../common/docButton';

const CorporateSignIn = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values, "SingleUserForm");
  };

  return (
    <div className='flex flex-col justify-between h-full'>
      <div>
        <Form form={form} onFinish={onFinish}>
          <Row gutter={[0, 0]}>
            <Col span={24}>
              <Form.Item
                label={<span className='text-grey'>Company Email</span>}
                name="companyEmail"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }} // Adjust the input column width
                rules={[{ required: true, message: "Please Enter Company Email" }]}
              >
                <DocInput type={"email"} placeholder="Enter Company Email"
                  onChange={(value) => form.setFieldsValue({ companyEmail: value })}
                // value={form.getFieldValue('username')}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label={<span className='text-grey'>Admin Email</span>}
                name="adminEmail"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }} // Adjust the input column width
                rules={[{ required: true, message: "Please enter User Name" }]}
              >
                <DocInput type={"email"} placeholder="Enter User name"
                  onChange={(value) => form.setFieldsValue({ adminEmail: value })}
                // value={form.getFieldValue('username')}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label={<span className='text-grey'>Password</span>}
                name="password"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }} // Adjust the input column width
                rules={[{ required: true, message: "Please enter Password" }]}
              >
                <DocInput type={"password"} placeholder="Enter Password"
                  onChange={(value) => form.setFieldsValue({ password: value })}
                />
              </Form.Item>

            </Col>

            <Col span={24} className='pb-4'>
              <span className='text-grey font-semibold'> Forgot Password? </span>
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
                <Checkbox>
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
        <DocButton onClick={() => form.submit()} className={"bg-primary text-white rounded-[50px] w-full text-[18px] border-none"} text={"Sign In"} />
      </div>

    </div>
  )
}

export default CorporateSignIn