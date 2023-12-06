import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const AddProducts = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value);
        const img = form.url.value;
        const description = form.description.value;
        const brand = form.brand.value;
        const product = { name, img, price, rating, brand, description };

        if (isNaN(price) || isNaN(rating)) {
            Swal.fire({
                icon: "error",
                title: "Input a valid value"
            });
        }

        fetch('https://rivo-server.vercel.app/products',
            {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(product)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Congratulation",
                        text: "Product Add successfully"
                    });
                    form.reset();
                }
            })
    }

    return (
        <div>
<Helmet><title>Add Product</title></Helmet>

            <form className="my-10 mx-auto" onSubmit={handleAddProduct}>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Title</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="url" name="url" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image Url</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Your Brand</label>
                    <select name='brand' id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        <option>Adidas</option>
                        <option>Zara</option>
                        <option>Nike</option>
                        <option>Gucci</option>
                        <option>Levi</option>
                    </select>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="price" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="rating" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rating</label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <textarea type="text" name='description' id="message" rows="4" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "></textarea>
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Description</label>
                </div>
                <button type="submit" className="text-[#fff] hover:bg-myColor bg-myColor btn ">Submit</button>
            </form>

        </div>
    );
};

export default AddProducts;