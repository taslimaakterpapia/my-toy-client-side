import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import SingleToy from "../pages/SingleToy/SingleToy";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToys from "../pages/UpdateToys/UpdateToys";
import PrivateRoutes from "./PrivateRoutes";

import Error from "../pages/Error/Error";
import Blog from "../Blog/Blog";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <Register></Register>
            },
            {
                path: '/addToy',
                element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
            },
            {
                path: "/allToy",
                element: <AllToys></AllToys>,
               
            },
            {
                path: 'singleToy/:id',
                element: <PrivateRoutes><SingleToy></SingleToy></PrivateRoutes>,
                loader: ({params})=>fetch(`https://assignment-11-server-sage.vercel.app/alltoys/${params.id}`)
            },
            {
                path: '/myToy',
                element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path:"updatetoys/:id",
                element: <UpdateToys></UpdateToys>,
                loader:({params})=>fetch(`https://assignment-11-server-sage.vercel.app/alltoys/${params.id}`)
            }
        ]
    }
]);
export default router;