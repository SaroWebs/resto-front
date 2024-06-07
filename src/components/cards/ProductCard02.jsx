import axios from 'axios';
import React, { useState } from 'react'
import { GoHeartFill, GoHeart } from "react-icons/go";
import { useCart } from 'react-use-cart';

const ProductCard02 = (props) => {
    const {
        product,
        app_url,
        image_url = "https://img.freepik.com/premium-photo/cheesy-burger-delight-generative-ai_94628-5446.jpg?w=826",
        rating = 3.5
    } = props;

    let [isFav, setIsFav] = useState(false);

    const { addItem } = useCart();

    const favToggler = () => {
        // axios.post(`${app_url}/api/product/${product.id}/addtofav`)
        //     .then(res => {
        //         console.log(res.data);
        //         setIsFav(!isFav)
        //     }).catch(error=>{
        //         console.log(error.message);
        //     });
        setIsFav(!isFav)
    }

    return (
        <a href={`/p/${product.id}`} className="flex flex-col w-full border rounded-md pb-2 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <button
                onClick={(e) => { e.preventDefault(); favToggler(); }}
                className="absolute top-2 right-2 p-1 rounded-full bg-white/30 backdrop-blur-md hover:bg-white/50 transition-colors duration-300"
            >
                {isFav ? <GoHeartFill className="w-6 h-6 text-red-500" /> : <GoHeart className="w-6 h-6 text-gray-600" />}
            </button>
            {product.images.length > 0 ? (
                <div className="h-32 w-full overflow-hidden">
                    <img
                        src={app_url + '/' + product.images[0].image_url}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            ) : (
                <div className="h-32 w-full overflow-hidden">
                    <img
                        src={image_url}
                        alt={'Resto'}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            <div className="p-2">
                <h6 className="text-xs font-bold text-left text-slate-600">{product.name}</h6>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-yellow-300"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.181 3.637a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.223a1 1 0 00-.364 1.118l1.18 3.637c.3.921-.755 1.688-1.54 1.118L10 13.287l-3.087 2.223c-.784.57-1.84-.197-1.54-1.118l1.181-3.637a1 1 0 00-.364-1.118L3.103 9.065c-.783-.57-.381-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.181-3.637z" />
                        </svg>
                        <h5 className="mb-0 ml-2 number text-xs font-bold text-slate-400">{rating}</h5>
                    </div>
                    <div>
                        <h5 className="mb-0 ml-2 text-sm font-semibold text-slate-700">₹ {product.price}</h5>
                    </div>
                </div>
                <button
                    onClick={(e) => { e.preventDefault(); addItem(product); }}
                    className="mt-2 w-full bg-blue-500 text-white text-sm font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                    Add to cart
                </button>
            </div>
        </a>
    )
}

export default ProductCard02
