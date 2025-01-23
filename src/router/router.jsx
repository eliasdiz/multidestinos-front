import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../components/Login";
import DashBoard from "../components/DashBoard";
import MainLayout from "../Layouts/MainLayout";


const router = createBrowserRouter([

    {
        path: '/', element: <MainLayout />,
        children: [
            { path:'/', element: <Home />  },
            { path:'/login', element: <Login />  },
            { path:'/dashboard', element: <DashBoard />  },
        ]
    }



])

export default router