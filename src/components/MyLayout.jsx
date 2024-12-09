import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import logo from '../assets/logo.png'
const { Header, Sider, Content } = Layout;
const App = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className='MyLayout'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" >
        <img src={logo} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: '学生管理',
              children: [
                {
                  key: '1-1',
                  label: '学生信息',
                },
                {
                  key: '1-2',
                  label: '学生成绩',
                }
              ]
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: '班级管理',
              children: [
                {
                  key: '2-1',
                  label: '班级信息',
                },
                {
                  key: '2-2',
                  label: '班级学生',
                }
              ]
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: '课程管理',
              children: [
                {
                  key: '3-1',
                  label: '课程信息',
                },
                {
                  key: '3-2',
                  label: '授课老师',
                }
              ]
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;