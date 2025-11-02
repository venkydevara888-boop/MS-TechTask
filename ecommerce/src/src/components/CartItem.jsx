import React from 'react'

// component to show each cart item
function CartItem({ item, removeFromCart }) {
  // calculating total price for each item
  const totalPrice = item.price * item.qty

  return (
    <div className="flex items-center space-x-4 border-b py-3">
      {/* product image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-16 object-cover rounded"
      />

      {/* product name and quantity */}
      <div className="flex-1">
        <div className="font-medium">{item.title}</div>
        <div className="text-sm text-gray-500">Qty: {item.qty}</div>
      </div>

      {/* price and remove button */}
      <div className="text-right">
        <div className="font-bold">₹{totalPrice}</div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 text-sm mt-1"
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
