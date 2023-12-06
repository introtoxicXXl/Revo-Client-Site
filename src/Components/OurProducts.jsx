import { useEffect, useState } from "react";
import Product from "./Product";



const OurProducts = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch('https://rivo-server.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            })
    }, [])

    const filterItem = (cats) => {
        if (cats === 'All') {
            setFilteredProducts(products);
        } else {
            const updateItems = products.filter(pro => pro.brand === cats);
            setFilteredProducts(updateItems);
        }
    }


    return (
        <div className="container mx-auto">
            <h2 className="text-myColor font-medium text-5xl text-center font-Roboto">Our Products</h2>
            <div className="text-center">
                <ul className="flex md:px-0 px-5 lg:w-2/5 md:w-3/5 w-full justify-between mx-auto my-6">
                    <li className="cursor-pointer text-myColor font-medium font-Roboto md:text-xl" onClick={() => filterItem('All')}>All</li>
                    <li className="cursor-pointer text-myColor font-medium font-Roboto md:text-xl" onClick={() => filterItem('Adidas')}>Adidas</li>
                    <li className="cursor-pointer text-myColor font-medium font-Roboto md:text-xl" onClick={() => filterItem('Nike')}>Nike</li>
                    <li className="cursor-pointer text-myColor font-medium font-Roboto md:text-xl" onClick={() => filterItem('Zara')}>Zara</li>
                    <li className="cursor-pointer text-myColor font-medium font-Roboto md:text-xl" onClick={() => filterItem('Gucci')}>Gucci</li>
                    <li className="cursor-pointer text-myColor font-medium font-Roboto md:text-xl" onClick={() => filterItem('Levi')}>Levi</li>
                </ul>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-3 justify-center">
                {
                    filteredProducts.length > 0 ? filteredProducts.map(product => <Product key={product.id} product={product}></Product>).slice(0,8) : <p className="text-center text-myColor font-semibold font-Poppins text-2xl w-full h-48 col-span-12 flex items-center justify-center">No products available for this brand.</p>
                }
            </div>
        </div>
    );
};

export default OurProducts;