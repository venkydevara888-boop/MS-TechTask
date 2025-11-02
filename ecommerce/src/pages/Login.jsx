import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const admin = { email: "admin@example.com", password: "admin123", role: "admin", name: "Admin" };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (email === admin.email && password === admin.password) {
      setUser(admin);
      navigate("/");
      return;
    }

    const stored = localStorage.getItem("signup_users");
    const users = stored ? JSON.parse(stored) : [];
    const found = users.find((u) => u.email === email && u.password === password);

    if (found) {
      setUser({ email: found.email, name: found.name, role: "user" });
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-600 font-semibold hover:underline">
            Signup
          </Link>
        </p>
        <div className="mt-6">
            <Link to="/" className="text-blue-600 hover:underline text-sm">
                ← Back to Home
            </Link>
         </div>
      </div>
    </div>
  );
}

export default Login;
