import { useEffect, useState } from "react";
import Product from "./Product";



const OurProducts = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch('/rivo.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data); // Set initial filtered products to all products
            })
    }, [])

    const filterItem = (cats) => {
        if (cats === 'All') {
            setFilteredProducts(products); // Show all products when "All" is clicked
        } else {
            const updateItems = products.filter(pro => pro.brand === cats);
            setFilteredProducts(updateItems); // Filter products by brand
        }
    }


    return (
        <div className="container mx-auto">
            <h2 className="text-myColor font-medium text-5xl text-center font-Roboto">Our Products</h2>
            <div className="text-center">
                <ul className="flex md:px-0 px-5 md:w-2/5 justify-between mx-auto my-6">
                    <li className="cursor-pointer text-myColor font-medium font-Roboto text-xl" onClick={() => filterItem('All')}>All</li>
                    <li className="cursor-pointer text-myColor font-medium font-Roboto text-xl" onClick={() => filterItem('Adidas')}>Adidas</li>
                    <li className="cursor-pointer text-myColor font-medium font-Roboto text-xl" onClick={() => filterItem('Nike')}>Nike</li>
                    <li className="cursor-pointer text-myColor font-medium font-Roboto text-xl" onClick={() => filterItem('Zara')}>Zara</li>
                </ul>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-3 justify-center">
                {
                    filteredProducts.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default OurProducts;