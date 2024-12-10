import React, {useState,useEffect} from 'react';
import { Card, Button, Form, Input, Table, Modal, App  } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

export default function StudentType() {
  const [form] = Form.useForm();
  const [formEdit] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { message } = App.useApp();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    message.success('添加成功');
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // useEffect(()=>{
    // 初始化赋值
  //   // form.setFieldsValue({
  //   //   name: '王小明',
  //   //   class: '高一(1)班'
  //   // })
  //   console.log(form.getFieldValue())
  // },[])
  // 监听表单值变化
  const nameValue = Form.useWatch('name', form);
  const classValue = Form.useWatch('class', form);

  return (
    <div>
      <Card
        title="学生分类"
        extra={
          <div>
            <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={showModal}/>
            </div>
        }
      >
        <div>
        {/* { form.getFieldValue("name")} */}
        {nameValue && <div>Name: {nameValue}</div>}
        {classValue && <div>Class: {classValue}</div>}
        <Form
          layout={'inline'}
          form={form}
          style={{paddingBottom: '20px'}}
        >
         <Form.Item label="学生姓名" name="name">
            <Input placeholder="请输入学生姓名" />
          </Form.Item>
          <Form.Item label="学生分类" name="class">
            <Input placeholder="请输入学生分类" />
          </Form.Item>
        </Form>
          <Table dataSource={dataSource} columns={columns} >

          </Table>
        </div>
      </Card>
      <Modal title="编辑" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}