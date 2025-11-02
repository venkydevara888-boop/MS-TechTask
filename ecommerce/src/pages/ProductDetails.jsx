import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function ProductDetails({ cart, addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    const already = cart.some((c) => c.id === product.id);
    if (already) {
      setMessage("✅ Already in favourites.");
    } else {
      addToCart(product);
      setMessage("❤ Added to favourites!");
    }
  };

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product } });
  };

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="bg-white shadow rounded-xl p-6 w-full md:w-3/4 lg:w-2/3">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="w-full md:w-1/2 h-64 object-contain rounded-lg border"
          />

          <div>
            <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-blue-600 font-bold text-xl mt-4">₹{product.price}</p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add to Favourites
              </button>

              <button
                onClick={handleBuyNow}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Buy Now
              </button>
            </div>

            {message && <p className="mt-3 text-sm text-green-600">{message}</p>}

            <div className="mt-6">
              <Link to="/" className="text-blue-600 hover:underline text-sm">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
