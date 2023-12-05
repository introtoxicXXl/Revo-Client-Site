import { useLoaderData } from "react-router-dom";
import Product from "../Components/Product";
import { Helmet } from 'react-helmet-async';


const Products = () => {
    const data = useLoaderData();

    return (
        <div className="my-24 container mx-auto">
        <Helmet><title>Products</title></Helmet>
            <div className="mb-6 space-y-3">
               <h1 className="text-myColor text-center font-bold text-4xl">All Products</h1>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                {
                    data.map(product=><Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;