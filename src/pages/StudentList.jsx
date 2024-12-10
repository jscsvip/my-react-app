import React from 'react';
import axios from 'axios';
export default function StudentList() {
  axios.get('/api/getData').then(({data})=>{
    console.log(data)
  })
  return (
    <div>
      <h1>Student StudentList</h1>
    </div>
  );
}