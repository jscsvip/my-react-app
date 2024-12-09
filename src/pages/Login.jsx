import { Row,Col,Card,Button, Checkbox, Form, Input, message  } from 'antd';
import React from 'react';
import {useNavigate} from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Success:', values);
    message.success("登录成功")
    navigate('/admin/student_type')
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
    <div className='login-container'>
      <Row>
          <Col 
          md={{
            span: 8,
            push: 8
          }}
          xs={{
            span: 22,
            push: 1
          }}
          >


          <Card
            title={<div style={{textAlign:"center","fontSize": 20}}>木叶村教学管理系统</div>}
            bordered={false}
            style={{
              marginTop: '200px'
            }}
          >
            <Form
                name="basic"
                labelCol={{
                  span: 6,
                }}
                wrapperCol={{
                  span: 16,
                }}
              
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" label={null}>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item label={null}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
          </Card>
          </Col>
        </Row>
    </div>
    </>
  )
}