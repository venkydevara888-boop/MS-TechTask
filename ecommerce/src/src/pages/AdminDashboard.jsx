import React from 'react'
import products from '../data/products'

// simple admin dashboard page
function AdminDashboard({ user }) {

  // check user role
  if (!user || user.role !== 'admin') {
    return (
      <div className="bg-white p-6 rounded shadow mt-4">
        <p className="text-red-500">Access denied. Admins only.</p>
      </div>
    )
  }

  // mock data for demo
  const ordersCount = 5

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Products list */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Products</h2>
          <ul className="space-y-2">
            {products.map((p) => (
              <li key={p.id} className="flex items-center justify-between border-b pb-1">
                <span className="text-sm">{p.title}</span>
                <span className="text-sm font-semibold">₹{p.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Orders summary */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Orders Overview</h2>
          <p>Total orders (demo): <b>{ordersCount}</b></p>
          <p className="text-sm text-gray-500 mt-2">
            This is a simple demo dashboard for admin users.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
