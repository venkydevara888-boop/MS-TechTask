import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount, user, logout }) {
  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand Name */}
        <Link to="/" className="flex items-center space-x-3 group">
          {/* Logo Image */}
          <img
            src="./src/assets/AURA.jpg"
            alt="AURA Logo"
            className="h-16 w-16 object-cover rounded-full border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
          />

          {/* Brand Text */}
          <span className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[2px_2px_6px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-300">
            AURA  ✨
          </span>
        </Link>

        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-gray-200 transition">Home</Link>

          <Link to="/cart" className="hover:text-gray-200 transition">
            Favourites ❤ ({cartCount})
          </Link>

          {user ? (
            <>
              <Link to="/profile" className="hover:text-gray-200">
                {user.name || "Profile"}
              </Link>
              {user.role === "admin" && (
                <Link to="/admin" className="hover:text-gray-200">
                  Admin
                </Link>
              )}
              <button
                onClick={logout}
                className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-200">Login</Link>
              <Link to="/signup" className="hover:text-gray-200">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
