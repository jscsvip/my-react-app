import './App.css'
import { Button } from 'antd';
import { RouterProvider  } from "react-router-dom"
import router from "./router"

function App() {

  return (
    <>
     {/* <Button type="primary">Primary Button</Button> */}
   
     <RouterProvider router={router} >
    </RouterProvider>

    </>
  )
}

export default App
