import React from 'react'
import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    if (isEmpty) return <p>Your cart is empty</p>;
    return (
        <div>
            <h1>Cart ({totalUniqueItems})</h1>

        </div>
    )
}

export default Cart
