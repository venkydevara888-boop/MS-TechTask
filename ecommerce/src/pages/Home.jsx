import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-100 to-purple-100">
        <div className="text-2xl font-semibold text-indigo-600 animate-pulse">
          Loading products...
        </div>
      </div>
    );
  }

  return (
<div className="min-h-screen bg-sky-50">
      
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to <span className="text-indigo-700">AURA</span> ✨
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Discover trendy collections & shop with style!
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search your favorite product..."
          className="border-2 border-indigo-300 rounded-full p-3 px-5 w-72 md:w-96 outline-none shadow-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 bg-white/70 backdrop-blur-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 pb-10">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <div key={item.id}>
              <ProductCard
                product={{
                  id: item.id,
                  title: item.title,
                  description: item.description,
                  price: item.price,
                  image: item.images?.[0],
                }}
                addToCart={addToCart}
                addLabel="Add ❤ "
              />
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
