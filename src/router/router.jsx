import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../components/Login";
import DashBoard from "../components/DashBoard";
import MainLayout from "../Layouts/MainLayout";
import Descripcion from "../components/InfoPlanes/Descripcion";
import Opcion1 from "../components/InfoPlanes/Opcion1";
import Opcion2 from "../components/InfoPlanes/Opcion2";
import Hospedaje from "../components/InfoPlanes/Opcion2";
import CuchoBot from '../components/InfoPlanes/CuchoBot'


const router = createBrowserRouter([

    {
        path: '/', element: <MainLayout />,
        children: [
            { path:'/', element: <Home />  },
            { path:'/login', element: <Login />  },
            { path:'/dashboard', element: <DashBoard />  },
            { path:'/descripcion', element: <Descripcion />  },
            { path:'/opcion1', element: <Opcion1 />  },
            { path:'/opcion2', element: <Opcion2 />  },
            { path:'/cuchobot', element: <CuchoBot />  },
        ]
    }



])

export default router