"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function OrderPage() {
  const searchParams = useSearchParams();
  const productName = searchParams.get("productName");
  const productId = searchParams.get("productId");
  const price = parseFloat(searchParams.get("price")) || 0; // add price from query params

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const fullAddress = `${address}, ${city}, ${state}, ${zip}`;

  const orderData = {name, email, address: fullAddress, product: productName, productId, price, quantity };

  try {
    const response = await fetch("https://ctc-backend-lygo12pk0-visheshs-projects-77979655.vercel.app/send-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });

    if (response.ok) {
      alert("✅ Order submitted successfully!");
    } else {
      const errorData = await response.json();
      console.error("Error:", errorData);
      alert("❌ Something went wrong. Please try again.");
    }
  } catch (err) {
    console.error("Fetch error:", err);
    alert("❌ Network error. Please try again.");
  }
};


  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-4 text-center">Order Product</h1>

          <form id="order-form" onSubmit={handleSubmit} className="space-y-4">
            <p className="text-gray-700 font-medium">
              Product: <span className="text-blue-500">{productName}</span>
              <br />
              Price: <span className="text-blue-500">₹{price}</span>
            </p>

            <label className="text-gray-700 font-medium">Quantity:</label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="px-2 text-center text-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            >
              {[1,2,3,4,5,10].map(q => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <fieldset className="border p-4 rounded-md">
              <legend className="text-gray-700 font-medium mb-2">Shipping Address</legend>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
                <input
                  type="number"
                  maxLength={6}
                  placeholder="Zip Code"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  required
                />
              </div>
            </fieldset>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Submit Order
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
