import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const AllProducts = () => {

    const data = useLoaderData();
    const [updateProduct, setUpdateProduct] = useState(data)
    const handleDelete = id => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json)
            .then(data => {
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
                        const remaining = updateProduct.filter(pro => pro._id !== id);
                        setUpdateProduct(remaining);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }

                });

            })
    }

    return (
        <div className="grid md:grid-cols-3 gap-4 my-10">
        <Helmet><title>Dashboard-All Products</title></Helmet>
            {
                updateProduct.map(product =>

                    <div key={product._id} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg" src={product.img} alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{product.brand}</span>
                            <p className="my-3 font-normal text-gray-700 dark:text-gray-400">{product.description.slice(0, 100)}</p>
                            <div className="flex justify-between">
                                <Link to={`/dashboard/allProducts/update/${product._id}`} className="text-[#fff] hover:bg-myColor bg-myColor btn ">
                                    Update
                                </Link>
                                <button onClick={() => handleDelete(product._id)} className="text-[#fff] btn btn-error ">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default AllProducts;