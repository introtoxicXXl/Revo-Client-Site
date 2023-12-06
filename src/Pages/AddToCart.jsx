import { useEffect, useState } from "react";
import { deleteFromLs, getItem } from "../utility/localStorage";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const AddToCart = () => {
    const [products, setProducts] = useState([])
    const cartItems = getItem();

    useEffect(() => {
        fetch(`https://rivo-server.vercel.app/products/cart?ids=${cartItems}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [cartItems])

    const totalPrice = products.reduce((acc, product) => acc + product.price, 0).toFixed(2);

    const handleRemove = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteFromLs(id)
                const remaining = products.filter(pro => pro._id !== id);
                setProducts(remaining);
                Swal.fire({
                    title: "Remove!",
                    text: "This item remove cart",
                    icon: "success"
                });
            }

        })
    }

    return (
        <div className="container mx-auto grid md:grid-cols-6 gap-6 my-10">
            <Helmet><title>Cart</title></Helmet>
            <div className="md:col-span-4 col-span-6">
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                    {
                        products.map(product =>


                            <div key={product._id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img className="p-8 rounded-t-lg" src={product.img} alt="product image" />
                                <div className="px-5 pb-5">
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{product.brand}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                        <button onClick={()=>handleRemove(product._id)} className="btn btn-error text-[#fff]">Remove</button>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
            <div className="md:col-span-2 col-span-6 w-full">
                <div className="relative overflow-x-auto mt-8">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 rounded-s-lg">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3 rounded-e-lg">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => <tr key={product._id} className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {product.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        ${product.price}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                        <tfoot>
                            <tr className="font-semibold text-gray-900 dark:text-white">
                                <th scope="row" className="px-6 py-3 text-base">Total</th>
                                <td className="px-6 py-3">
                                    {totalPrice}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AddToCart;