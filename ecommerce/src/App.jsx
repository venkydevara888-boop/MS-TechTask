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
import Checkout from "./pages/Checkout";

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const addToCart = (product) => {
    setCart((prev) => {
      if (!prev.some((item) => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const logout = () => setUser(null);

  return (
    <>
      <Navbar cartCount={cart.length} user={user} logout={logout} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              cart={cart}
              addToCart={addToCart}
              cartCount={cart.length}
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
  path="/product/:id"
  element={
    <ProductDetails
      cart={cart}
      addToCart={addToCart}
      cartCount={cart.length}
      user={user}   // 👈 add this line
    />
  }
/>
      </Routes>
    </>
  );
}

export default App;
