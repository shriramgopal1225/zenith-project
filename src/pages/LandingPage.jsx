import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Smart Task Management & Collaboration Dashboard</h1>
      <p className="text-lg mb-6">A lightweight yet powerful alternative to Notion & Jira.</p>
      <Link to="/register" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md">Get Started</Link>
    </div>
  );
}
