import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../components/Login";


const router = createBrowserRouter([

    { path:'/', element: <Home />  },
    { path:'/login', element: <Login />  }


])

export default router