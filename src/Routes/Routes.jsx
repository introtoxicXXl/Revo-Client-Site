import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import DetailsProduct from "../Pages/DetailsProduct";
import Products from "../Pages/Products";
import PrivetRoute from "./PrivetRoute";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'product/:id',
                element: <PrivetRoute><DetailsProduct /></PrivetRoute>
            },
            {
                path:'/products',
                element:<Products/>,
                loader:()=>fetch('rivo.json')
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/registration',
                element:<Registration/>
            }
        ]
    },
]);