import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Product from "./Product";
import { Link } from "react-router-dom";

const BestSell = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/rivo.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="my-24 container mx-auto">
            <div className="mb-6 space-y-3">
                <h2 className="text-myColor text-4xl md:text-6xl text-center font-Roboto font-medium">Best selling</h2>
                <p className="font-Poppins text-base md:text-xl text-center text-myColor font-medium my-4">Get in on the trend with our curated selection of best-selling styles.</p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>).slice(0, 3)
                }
            </div>
            <div className="flex justify-center">
                <Link to='/products'><button className="px-7 rounded border-myColor hover:bg-myColor hover:text-[#fff] transition-all hover:shadow-xl btn bg-transparent hover:border-none text-myColor my-8 py-2 border-2 flex items-center">See All <FaArrowRightLong className="ml-2" /></button></Link>
            </div>
        </div>
    );
};

export default BestSell;