import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../components/Login";
import DashBoard from "../components/DashBoard";


const router = createBrowserRouter([

    { path:'/', element: <Home />  },
    { path:'/login', element: <Login />  },
    { path:'/dashboard', element: <DashBoard />  },


])

export default router