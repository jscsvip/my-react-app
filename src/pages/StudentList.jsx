import React from 'react';
import {get} from '@/utils/request'
import {Card,Table,Button} from 'antd'
// const dataSource = [
//   {
//     key: '1',
//     name: '胡彦斌',
//     age: 32,
//     address: '西湖区湖底公园1号',
//   },
//   {
//     key: '2',
//     name: '胡彦祖',
//     age: 42,
//     address: '西湖区湖底公园1号',
//   },
// ];

const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
    render: (text,record,index) => index+1
  },
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
  {
    title: '操作',
    key: 'action',
    render: (text,record) => (
      <Button>编辑</Button>
    ),
  }
];

export default function StudentList() {
  const [dataSource,setData] = React.useState([])
  React.useEffect(()=>{
    get('/getData').then(({data})=>{
      console.log(data)
      setData(data)
    })
  },[])
 
  return (
    <div>
      <h1>Student StudentList</h1>
      <Card
        title="学生列表"
      >
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </div>
  );
}