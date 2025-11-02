import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const stored = localStorage.getItem("signup_users");
    const users = stored ? JSON.parse(stored) : [];

    if (users.some((u) => u.email === email)) {
      setMessage("⚠️ Email already exists!");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("signup_users", JSON.stringify(users));

    setUser({ name, email,password, role: "user" });
    setMessage("✅ Account created successfully!");
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Create Account</h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {message && <p className="text-center text-green-600 text-sm">{message}</p>}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
        <div className="mt-6">
                      <Link to="/" className="text-green-700 hover:underline text-sm">
                        ← Back to Home
                      </Link>
                    </div>
      </div>
    </div>
  );
}

export default Signup;
