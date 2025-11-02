import React from 'react'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'

// cart page
function Cart({ cart, removeFromCart, clearCart }) {

  // calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

      {/* if cart empty show message */}
      {cart.length === 0 ? (
        <div className="bg-white p-6 rounded shadow">
          <p>Your cart is empty.</p>
          <Link to="/" className="text-blue-600 mt-3 inline-block">Go to Products</Link>
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow">
          {/* list all cart items */}
          <div className="space-y-3">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
            ))}
          </div>

          {/* total and buttons */}
          <div className="mt-6 flex justify-between items-center">
            <div>
              <p className="text-lg">
                Total: <span className="font-bold">₹{total}</span>
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={clearCart}
                className="px-4 py-2 rounded border border-gray-400"
              >
                Clear
              </button>
              <button
                className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
