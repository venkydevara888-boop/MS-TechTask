import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile({ user, setUser }) {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [role, setRole] = useState(user ? user.role : "user");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  const saveProfile = () => {
  if (!name || !email) {
    alert("⚠ Please fill all fields");
    return;
  }

  const updatedUser = { ...user, name, email, role };
  setUser(updatedUser);

  const storedUsers = JSON.parse(localStorage.getItem("signup_users")) || [];
  const updatedUsers = storedUsers.map((u) =>
    u.email === user.email ? updatedUser : u
  );
  localStorage.setItem("signup_users", JSON.stringify(updatedUsers));

  alert("✅ Profile updated successfully!");
  navigate("/"); 
};


  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex justify-center items-center py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md transition-all hover:shadow-2xl">
      
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile avatar"
              className="w-20 h-20 rounded-full border-4 border-indigo-400 shadow-md"
            />
          </div>
          <h2 className="text-2xl font-bold text-indigo-700">
            {user.name || "My Profile"}
          </h2>
          <p className="text-sm text-gray-500">{role === "admin" ? "👑 Admin" : "🛍️ User"}</p>
        </div>

        
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md bg-gray-100 cursor-not-allowed"
              disabled
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Role</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md bg-gray-100 cursor-not-allowed"
              disabled
            />
          </div>

          
          <div className="flex justify-center">
            <button
              onClick={saveProfile}
              className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 shadow-md transition-transform transform hover:scale-105"
            >
              Save Changes
            </button>
          </div>
        </div>

      
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="text-indigo-600 hover:underline text-sm font-medium"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
