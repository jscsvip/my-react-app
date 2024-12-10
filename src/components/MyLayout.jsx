import React, { useState, useEffect } from 'react';
import { Outlet,useLocation   } from "react-router-dom"
import {
  UploadOutlined,
  UserOutlined,
  ReadOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Breadcrumb  } from 'antd';
import logo from '../assets/logo.png'
const {  Sider, Content } = Layout;
import { useNavigate } from "react-router-dom"
import Header from './layout/MyHeader';

const menuItemsArr = [
  {
    key: '/admin',
    icon: <UserOutlined />,
    label: '首页'
  },
  {
    key: '/admin/student_menu',
    icon: <UserOutlined />,
    label: '学生管理',
    children: [
      {
        key: '/admin/student_menu/student_type',
        label: '学生分类',
      },
      {
        key: '/admin/student_menu/student_list',
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
        key: '/admin/class_menu/class_type',
        label: '班级分类',
      },
      {
        key: '/admin/class_menu/class_list',
        label: '班级列表',
      }
    ]
  },
  {
    key: '/admin/course_menu',
    icon: <UploadOutlined />,
    label: '课程管理'
  },
]

 const createNavFn = (key)=>{
  const arrObj = []
  const demoFn = (arr)=>{
    arr.forEach(n=>{
      const {children, ...info} = n
      console.log(children,info)
      // 将数组扁平化
      arrObj.push(info)
      if(children){
        // 子目录遍历
        demoFn(children)
      }
    })
    
  }
  demoFn(menuItemsArr)
  // 找到当前路由下对应的菜单项以及父菜单
  const temp = arrObj.filter(n=>key.includes(n.key)).map(item=>{
    return {title: item.label,key: item.key}
  })
  return temp
 }

const MyLayout = ({children}) => {
  const navigate = useNavigate()
  // 获取当前的路由
  const {pathname} = useLocation()
  // console.log(pathname,pathname.split('/').slice(0, 3).join('/'))
  const [collapsed, setCollapsed] = useState(false);
  const [navigatePath, setNavigatePath] = useState([])
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const onCollapsed = () => {
    setCollapsed(!collapsed);
  };
  // 监听路由变化
  useEffect(() => {
    setNavigatePath(createNavFn(pathname))
  }, [pathname])

  console.log(navigatePath)
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
          defaultSelectedKeys={[pathname]}
          defaultOpenKeys={[pathname.split('/').slice(0, 3).join('/')]}
          items={menuItemsArr}
        />
      </Sider>
      <Layout>
       <Header colorBgContainer={colorBgContainer} collapsed={collapsed} onCollapsed={onCollapsed}></Header>
        <Breadcrumb
            style={{margin: '16px 16px 0'}}
            items={navigatePath}
          />
      
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
export default MyLayout;