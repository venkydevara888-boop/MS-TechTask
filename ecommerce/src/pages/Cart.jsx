import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart }) {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        Your Favourites ❤
      </h2>

      {cart.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-gray-600 text-lg">No items in favourites yet!</p>
          <Link
            to="/"
            className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cart.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition"
            >
              <img
                src={product.images?.[0]}
                alt={product.title}
                className="h-40 w-full object-contain mb-3 rounded"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-blue-600 font-bold">₹{product.price}</p>
              <Link
                to={`/product/${product.id}`}
                className="block bg-indigo-600 text-white text-center mt-2 py-1 rounded hover:bg-indigo-700"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
