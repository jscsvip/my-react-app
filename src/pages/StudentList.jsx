import React from 'react';
import {get} from '@/utils/request'

export default function StudentList() {
  get('/getData').then(({data})=>{
    console.log(data)
  })
  return (
    <div>
      <h1>Student StudentList</h1>
    </div>
  );
}