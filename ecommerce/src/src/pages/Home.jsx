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
      <p className="text-center mt-10 text-blue-600 font-semibold">
        Loading products...
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 pb-10">
     
      {/* search box */}
      <div className="flex justify-center mt-6 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 rounded-full p-2 px-4 w-72 md:w-96 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* product list */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <ProductCard
              key={item.id}
              product={{
                id: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                image: item.images[0],
              }}
              addToCart={addToCart}
            />
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
