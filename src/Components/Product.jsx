import { IoMdStar } from "react-icons/io";
import PropTypes from 'prop-types';


function Product({ product }) {
    const { name,img,price,rating } = product;
    return (
        <div className="border-2 rounded-2xl border-gray-200 p-2 cursor-pointer hover:shadow-xl hover:-translate-y-3 transition-all">
            <div className="flex">
                <img className='w-full rounded-2xl' src={img} alt="" />
            </div>
            <div className='text-center'>
                <h3 className='text-xl font-medium font-Poppins mt-3'>{name}</h3>
                <p className='flex justify-evenly text-xl'>
                    <span className=''>${price}</span>
                    <span className="flex items-center">{rating} <IoMdStar className="text-yellow-400 ml-1" /></span>
                </p>
            </div>
        </div>
    );
}
Product.propTypes = {
    product: PropTypes.object.isRequired
};

export default Product;