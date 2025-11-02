import React from 'react'

function CartItem({ item, removeFromCart }) {
  return (
    <div className="flex items-center space-x-4 border-b py-3">
      <img src={item.image} alt={item.title} className="w-20 h-16 object-cover rounded" />
      <div className="flex-1">
        <div className="font-medium">{item.title}</div>
        <div className="text-sm text-gray-500">Qty: {item.qty}</div>
      </div>
      <div className="text-right">
        <div className="font-bold">₹{item.price * item.qty}</div>
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