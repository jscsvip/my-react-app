import './App.css'
import { Button } from 'antd';
import { RouterProvider  } from "react-router-dom"
import router from "./router"
import { App } from 'antd';

function MyApp() {

  return (
    <>
     {/* <Button type="primary">Primary Button</Button> */}
    <App>
      <RouterProvider router={router} >
      </RouterProvider>
    </App>
    
    </>
  )
}

export default MyApp
