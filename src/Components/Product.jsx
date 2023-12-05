import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Product({ product }) {
    const { name, img, price, rating, _id, brand } = product;
    return (


        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="p-8 rounded-t-lg" src={img} alt="product image" />
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{brand}</span>
            <div className="px-5 pb-5">
                <div className="flex justify-between mt-2.5 mb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{rating}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                    <Link to={`/product/${_id}`}><button className="text-white bg-myColor btn btn-md focus:outline-none text-[rgb(255,255,255)] hover:bg-myColor font-medium rounded-lg text-sm px-5 py-2.5 text-center ">View Details</button></Link>
                </div>
            </div>
        </div>

    );
}
Product.propTypes = {
    product: PropTypes.object.isRequired
};

export default Product;