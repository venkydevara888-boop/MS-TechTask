import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
      return;
    }
    navigate("/checkout", { state: { product } });
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-4 transition-all">
      <img
        src={product.image ? product.image : "https://via.placeholder.com/150"}
        alt={product.title}
        className="w-full h-48 object-contain mb-3"
      />

      <h3 className="text-gray-800 font-semibold text-sm truncate">
        {product.title}
      </h3>
      <p className="text-gray-500 text-xs mt-1 line-clamp-2">
        {product.description}
      </p>
      <div className="flex items-center justify-between mt-3">
        <span className="font-bold text-lg text-blue-600">₹{product.price}</span>

        <div className="flex space-x-2">
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700"
          >
            Add ❤
          </button>

          
          <Link
            to={`/product/${product.id}`}
            className="text-xs px-3 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
