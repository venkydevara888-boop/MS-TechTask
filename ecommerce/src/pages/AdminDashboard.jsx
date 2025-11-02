import React from "react";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Admin Dashboard 🛠
      </h2>
      <p className="text-center text-gray-600 text-lg">
        Welcome, Admin! Here you can manage products, users, and orders.
      </p>
    </div>
  );
}

export default AdminDashboard;
