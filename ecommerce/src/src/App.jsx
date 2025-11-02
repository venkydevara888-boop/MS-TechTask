import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const [cart, setCart] = useState([]); // store favorites

  // 🛒 Add to cart (favorites)
  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.some((p) => p.id === item.id);
      if (exists) return prev; // prevent duplicates
      return [...prev, item];
    });
  };

  // logout placeholder
  const logout = () => {
    alert("You have logged out!");
  };

  return (
    <>
      <Navbar cartCount={cart.length} user={null} logout={logout} />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
          path="/product/:id"
          element={<ProductDetails cart={cart} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
