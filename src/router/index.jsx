// src/router/index.jsx
import { createBrowserRouter,Navigate   } from "react-router-dom";
import ClassList from "../pages/ClassList";
import ClassType from "../pages/ClassType"; 
import CourseMenu from "../pages/CourseMenu";
import StudentList from "../pages/StudentList";
import StudentType from "../pages/StudentType"; 
const router = createBrowserRouter([
      {
        path:'/',
        element: <Navigate to="/admin/class_list"  />, //重定向
    },
    {
        path:'/admin/class_list',
        element: <ClassList />,
    },
    {
        path:'/admin/class_type',
        element: <ClassType />,
    },
    {
        path:'/admin/course_menu',
        element: <CourseMenu />,
    },
    {
      path:'/admin/student_list',
      element: <StudentList />,
  },
  {
      path:'/admin/student_type',
      element: <StudentType />,
  }
])
 
export default router