import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("cash");

  if (!product) {
    navigate("/");
    return null;
  }

  const total = product.price * quantity;

  const handleOrder = () => {
    if (!phone || !address) {
      alert("Please fill in all details.");
      return;
    }
    alert("✅ Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center py-10">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-4">Checkout</h2>

        <div className="flex items-center mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-20 h-20 rounded object-cover mr-4"
          />
          <div>
            <h3 className="font-semibold">{product.title}</h3>
            <p className="text-gray-600">₹{product.price}</p>
          </div>
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium">Quantity</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border rounded p-2 w-20"
          />
        </div>

        <p className="font-semibold mb-4">Total: ₹{total.toFixed(2)}</p>

        <div className="space-y-3 mb-4">
          <input
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Payment Method
          </label>
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                value="cash"
                checked={payment === "cash"}
                onChange={() => setPayment("cash")}
              />{" "}
              Cash on Delivery
            </label>
            <label>
              <input
                type="radio"
                value="online"
                checked={payment === "online"}
                onChange={() => setPayment("online")}
              />{" "}
              Online
            </label>
          </div>
        </div>

        <button
          onClick={handleOrder}
          className="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
