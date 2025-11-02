import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount, user, logout }) {
  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src="./src/assets/AURA.jpg"
            alt="AURA Logo"
            className="h-16 w-16 object-cover rounded-full border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
          />
          <span className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[2px_2px_6px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-300">
            AURA ✨
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-200 text-base font-medium hover:text-pink-600">Home</Link>

          <Link to="/cart" className="hover:text-gray-200 text-base font-medium hover:text-pink-600">
            Favourites ❤{" "}
            <span className="ml-1 bg-white text-indigo-700 px-2 py-0.5 rounded-full text-xs font-semibold hover:text-pink-600">
              {cartCount}
            </span>
          </Link>

          {user ? (
            <>
              <Link to="/profile" className="hover:text-gray-200 text-base font-medium">
                {user.name || "Profile"}
              </Link>

              {user.role === "admin" && (
                <Link to="/admin" className="hover:text-gray-200 text-base font-medium">
                  Admin
                </Link>
              )}

              <button
                onClick={logout}
                className="bg-red-500 px-3 py-1 rounded text-base font-medium hover:bg-red-600 transition duration-200 shadow-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="bg-blue-500 px-3 py-1 rounded text-base font-medium hover:bg-blue-600 transition duration-200 shadow-md">
                Login
              </Link>
              <Link to="/signup" className="bg-green-500 px-3 py-1 rounded text-base font-medium hover:bg-green-600 transition duration-200 shadow-md">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
