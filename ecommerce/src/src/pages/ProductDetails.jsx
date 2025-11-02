import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function ProductDetails({ cart = [], addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    const already = cart.some((c) => c.id === product.id);
    if (already) {
      setMessage("✅ Already in favourites.");
      return;
    }

    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      image:
        product.images?.[0] ||
        "https://via.placeholder.com/300x200?text=No+Image",
    };

    addToCart(item);
    setMessage("🛒 Added to favourites!");
  };

  const handleBuy = () => {
    alert("✅ Purchase successful! Thank you for shopping with AURA 💫");
    navigate("/");
  };

  if (loading) return <p className="text-center mt-10">Loading product...</p>;
  if (!product)
    return <p className="text-center mt-10 text-red-500">Product not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full md:w-3/4 lg:w-2/3">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={
              product.images?.[0] ||
              "https://via.placeholder.com/300x200?text=No+Image"
            }
            alt={product.title}
            className="w-full md:w-1/2 h-72 object-contain rounded-lg border"
          />

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800">
              {product.title}
            </h2>
            <p className="text-gray-600 mt-3">{product.description}</p>
            <p className="text-indigo-700 font-bold text-2xl mt-4">
              ₹{product.price}
            </p>

            <div className="flex items-center gap-3 mt-5">
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Add to Favourites
              </button>

              <button
                onClick={handleBuy}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Buy Now
              </button>
            </div>

            {message && (
              <p className="mt-3 text-sm text-green-600 font-semibold">
                {message}
              </p>
            )}

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
