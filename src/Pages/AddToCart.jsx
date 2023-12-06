import { useEffect, useState } from "react";
import { deleteFromLs, getItem } from "../utility/localStorage";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CiCircleMinus } from "react-icons/ci";
import Swal from "sweetalert2";


const AddToCart = () => {
    const [products, setProducts] = useState([])
    const cartItems = getItem();

    useEffect(() => {
        fetch(`http://localhost:5000/products/cart?ids=${cartItems}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [cartItems])

    const totalPrice = products.reduce((acc, product) => acc + product.price, 0).toFixed(2);

    const handleRemove =id=>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
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
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }

        })
    }

    return (
        <div className="container mx-auto h-screen grid grid-cols-6 gap-6">
            <Helmet><title>Cart</title></Helmet>
            <div className="col-span-4">
                <div className="grid grid-cols-2 gap-4 mt-8">
                    {
                        products.map(product =>
                            <div key={product._id} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={product.img} alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description.slice(0, 50)}...<Link className="hover:underline" to={`/product/${product._id}`}>Read More</Link></p>
                                    <div className="flex justify-around mb-3">
                                        <p>Price: {product.price}</p>
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{product.rating}</span>
                                        </div>
                                    </div>
                                    <button className="btn btn-sm w-10 text-[#fff] btn-error hover:text-[#fff] text-xl font-semibold font-Poppins" onClick={()=>handleRemove(product._id)}><CiCircleMinus/></button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="col-span-2">


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