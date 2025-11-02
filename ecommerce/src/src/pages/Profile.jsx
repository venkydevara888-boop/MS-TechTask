import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile({ user, setUser }) {
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')
  const navigate = useNavigate()

  // if user is not logged in, redirect to login page
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  // when user clicks on save button
  const saveProfile = () => {
    if (!name || !email) {
      alert('Please fill all fields')
      return
    }

    const updatedUser = { ...user, name, email }
    setUser(updatedUser)
    alert('Profile updated successfully!')
    useNavigate("/")
  }

  // if no user found (redirecting), return nothing
  if (!user) {
    return null
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10">
      <h2 className="text-xl font-semibold mb-4 text-center">My Profile</h2>

      <div className="space-y-3">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <button
            onClick={saveProfile}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
