// src/router/index.jsx
import { createBrowserRouter,Navigate   } from "react-router-dom";
import ClassList from "../pages/ClassList";
import ClassType from "../pages/ClassType"; 
import CourseMenu from "../pages/CourseMenu";
import StudentList from "../pages/StudentList";
import StudentType from "../pages/StudentType"; 
import MyLayout from "../components/MyLayout";
import Login from "../pages/Login";
import Index from "../pages/Index";
const router = createBrowserRouter([
      {
        path:'/',
        element: <Navigate to="/admin"  />, //重定向
    },
    {
      path:'/login',
      element: <Login />, //重定向
    },
    {
      path:'/admin',
      element: <MyLayout />,
      children:[
        {
          path:'/admin/',
          element: <Index />,
        },
        {
          path:'/admin/class_menu/class_list',
          element: <ClassList />,
        },
        {
            path:'/admin/class_menu/class_type',
            element: <ClassType />,
        },
        {
            path:'/admin/course_menu',
            element: <CourseMenu />,
        },
        {
          path:'/admin/student_menu/student_list',
          element: <StudentList />,
        },
        {
            path:'/admin/student_menu/student_type',
            element: <StudentType />,
        }
      ]
    },
   
])
 
export default router