import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../components/Login";
import DashBoard from "../components/DashBoard";
import MainLayout from "../Layouts/MainLayout";
import Descripcion from "../components/Info/Descripcion";
import Hospedaje from "../components/Info/Hospedaje";


const router = createBrowserRouter([

    {
        path: '/', element: <MainLayout />,
        children: [
            { path:'/', element: <Home />  },
            { path:'/login', element: <Login />  },
            { path:'/dashboard', element: <DashBoard />  },
            { path:'/descripcion', element: <Descripcion />  },
            { path:'/hospedaje', element: <Hospedaje />  },
        ]
    }



])

export default router