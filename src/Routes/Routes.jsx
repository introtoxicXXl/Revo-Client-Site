import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import DetailsProduct from "../Pages/DetailsProduct";
import Products from "../Pages/Products";
import PrivetRoute from "./PrivetRoute";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import ErrorPage from './../Pages/ErrorPage';
import Dashboard from './../Pages/Dashboard';
import Profile from "../Pages/Profile";
import AddProducts from "../Pages/AddProducts";
import AllProducts from "../Pages/AllProducts";
import UpdateProduct from "../Pages/UpdateProduct";

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'product/:id',
                element: <PrivetRoute><DetailsProduct /></PrivetRoute>,
                loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: '/products',
                element: <Products />,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration />
            },
            {
                path: '/dashboard',
                element: <PrivetRoute><Dashboard /></PrivetRoute>,
                children: [
                    {
                        path: '/dashboard/profile',
                        element: <Profile />
                    },
                    {
                        path: '/dashboard/addProducts',
                        element: <AddProducts />
                    },
                    {
                        path: '/dashboard/allProducts',
                        element: <AllProducts />,
                        loader: () => fetch('http://localhost:5000/products')
                    },
                    {
                        path: '/dashboard/allProducts/update/:id',
                        element: <UpdateProduct />,
                        loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
                    },
                ]
            }
        ]
    },
]);