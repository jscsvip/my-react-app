import './App.css'
import { Button } from 'antd';
import MyLayout from './components/MyLayout';
import { RouterProvider } from "react-router-dom"
import router from "./router"

function App() {

  return (
    <>
     {/* <Button type="primary">Primary Button</Button> */}
     <MyLayout>
       <RouterProvider router={router} />
     </MyLayout>

    </>
  )
}

export default App
