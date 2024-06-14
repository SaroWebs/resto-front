import React from 'react'
import { useCart } from 'react-use-cart';

const Checkout = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal
} = useCart();

  return (
    <div>
      chk
    </div>
  )
}

export default Checkout
