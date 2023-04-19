import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import CheckOut from "../pages/Home/CheckOut/CheckOut";
import Register from "../pages/Home/Register/Register";
import Login from "../pages/Home/Login/Login";
import ProtectRoute from "../ProtectRoute/ProtectRoute";
import RoomPage from "../pages/Home/RoomPage/RoomPage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:() => fetch('/rooms.json')
            },
            {
                path:"/rooms",
                element:<RoomPage></RoomPage>,
                loader:() => fetch('/rooms.json')
            },
            {
                path:"/checkout",
                element:<ProtectRoute>
                    <CheckOut></CheckOut>
                </ProtectRoute>
            },
            
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
])

export default router;