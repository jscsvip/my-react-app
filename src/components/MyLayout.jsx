import React, { useState } from 'react';
import { Outlet,useLocation   } from "react-router-dom"
import {
  UploadOutlined,
  UserOutlined,
  ReadOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import logo from '../assets/logo.png'
const {  Sider, Content } = Layout;
import { useNavigate } from "react-router-dom"
import Header from './layout/MyHeader';
const App = ({children}) => {
  const navigate = useNavigate()
  // 获取当前的路由
  const location = useLocation()
  console.log(location.pathname)
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const onCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout className='MyLayout'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" >
        <img src={logo} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          onClick={({ key, keyPath})=>{ console.log( key, keyPath); navigate(key) } }
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={[location.pathname.replace(/_.*/, '_menu')]}
          items={[
            {
              key: '/admin/student_menu',
              icon: <UserOutlined />,
              label: '学生管理',
              children: [
                {
                  key: '/admin/student_type',
                  label: '学生分类',
                },
                {
                  key: '/admin/student_list',
                  label: '学生列表',
                }
              ]
            },
            {
              key: '/admin/class_menu',
              icon: <ReadOutlined />,
              label: '班级管理',
              children: [
                {
                  key: '/admin/class_type',
                  label: '班级分类',
                },
                {
                  key: '/admin/class_list',
                  label: '班级列表',
                }
              ]
            },
            {
              key: '/admin/course_menu',
              icon: <UploadOutlined />,
              label: '课程管理'
            },
          ]}
        />
      </Sider>
      <Layout>
       <Header colorBgContainer={colorBgContainer} collapsed={collapsed} onCollapsed={onCollapsed}></Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
        {/* 子路由嵌套 */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;