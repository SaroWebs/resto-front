import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
    let sys_url = 'http://localhost:8000/'
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal
    } = useCart();

    if (isEmpty) return (
        <div className="flex flex-col items-center mt-20">
            <svg className="w-24 h-24 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.536-8.707a1 1 0 10-1.414 1.414 1 1 0 001.414-1.414zM8.464 10.293a1 1 0 111.414-1.414 1 1 0 01-1.414 1.414zm1.75 4.034a4.98 4.98 0 01-2.464-.643 1 1 0 111.147-1.632c.579.337 1.282.523 2.02.523.738 0 1.441-.186 2.02-.523a1 1 0 111.147 1.632 4.98 4.98 0 01-2.464.643z" clipRule="evenodd" />
            </svg>
            <p className="mt-6 text-gray-500 text-lg">Oops! Your cart is feeling empty.</p>
            <a href="/" className="mt-4 text-blue-500 hover:underline">Go back home and add some delicious food!</a>
        </div>
    );


    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Cart ({totalUniqueItems})</h1>
            <div className="flex flex-col gap-4">
                {items.map(item => (
                    <div key={item.id} className="flex justify-between items-center border p-4 rounded-lg shadow-sm">
                        <div className="flex gap-4 items-center">
                            {item.images.length ?
                            <img src={sys_url+item.images[0].image_url} alt={'no image'} className="w-16 h-16 object-cover rounded-md" />
                            :
                            <img src="/images/no-item.png" alt={'no image'} className="w-16 h-16 object-cover rounded-md" />
                        }
                            <div>
                                <h2 className="text-lg font-medium">{item.name}</h2>
                                <p className="text-gray-500">₹ {item.price}</p>
                                <div className="flex items-center mt-2">
                                    <button
                                        className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                    >-</button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button
                                        className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                    >+</button>
                                </div>
                            </div>
                        </div>
                        {/* <button
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            onClick={() => removeItem(item.id)}
                        >
                            Remove
                        </button> */}
                    </div>
                ))}
            </div>
            <div className="mt-6 text-right">
                <h2 className="text-xl font-medium">Total: ₹ {cartTotal}</h2>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}

export default Cart;
