import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import DetailsProduct from "../Pages/DetailsProduct";
import Products from "../Pages/Products";

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
                element: <DetailsProduct />
            },
            {
                path:'/products',
                element:<Products/>,
                loader:()=>fetch('rivo.json')
            }
        ]
    },
]);