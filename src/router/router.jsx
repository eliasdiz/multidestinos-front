import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../components/Login";
import DashBoard from "../components/DashBoard";
import MainLayout from "../Layouts/MainLayout";
import Descripcion from "../components/InfoPlanes/Descripcion";
import Opcion1 from "../components/InfoPlanes/Opcion1";
import Opcion2 from "../components/InfoPlanes/Opcion2";
import Opcion3 from "../components/InfoPlanes/Opcion3";
import Opcion4 from "../components/InfoPlanes/Opcion4";
import Opcion5 from "../components/InfoPlanes/Opcion5";


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
            { path:'/opcion3', element: <Opcion3 />  },
            { path:'/opcion4', element: <Opcion4 />  },
            { path:'/opcion5', element: <Opcion5 />  },
        ]
    }



])

export default router