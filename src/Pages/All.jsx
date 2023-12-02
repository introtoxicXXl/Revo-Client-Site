import { useState } from "react";
import Product from "../Components/Product";


const All = () => {
    const [alls, setAlls] = useState([])

    fetch('/rivo.json')
        .then(res => res.json())
        .then(data => setAlls(data))


    return (
        <div className="grid grid-cols-3 mt-8 gap-4">
            {
                alls.map(product=><Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default All;