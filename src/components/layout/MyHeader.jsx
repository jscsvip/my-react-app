import React, { useState } from 'react';
import { Button, Layout,Dropdown,message } from 'antd';
import userImg from '@/assets/react.svg';
import { useNavigate  } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
const { Header } = Layout;
const items = [
  {
    key: 'userInfo',
    label: (
      <a>
        个人信息
      </a>
    ),
  },
  {
    key: 'logout',
    label: (
      <a>
        退出登录
      </a>
    ),
  }
]
export default function MyHeader({colorBgContainer,collapsed,onCollapsed}) {
  const navigate = useNavigate();
  const handleUserMenuSelect = ({key, label}) => {
    console.log('click', key);
    if(key === 'logout'){
      navigate('/login')
    }else{
      message.info("暂未登录")
    }
    // if(key === 'userInfo'){
    //   console.log('个人信息');
    // }
  }
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => onCollapsed() }
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
      <Dropdown
        menu={{
          items,
          onClick:handleUserMenuSelect
        }}
        
      >
        <div style={{float: 'right',marginRight: '20px'}}>
            <img src={userImg} alt="" style={{width: '40px',height: '40px',borderRadius: '50%'}} />
        </div>
      </Dropdown>
    </Header>
  );
}