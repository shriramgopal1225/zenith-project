import React from "react";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input type="text" placeholder="Full Name" className="block w-full mb-2 p-2 border" />
        <input type="email" placeholder="Email" className="block w-full mb-2 p-2 border" />
        <input type="password" placeholder="Password" className="block w-full mb-4 p-2 border" />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Sign Up</button>
      </div>
    </div>
  );
}
