import React from "react";

const DashBoard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Dashboard
        </h1>
        <p className="text-gray-500">
          Welcome back, Easin 👋
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
        <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
          <h3 className="text-gray-500 text-sm">Total Blogs</h3>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
          <h3 className="text-gray-500 text-sm">Projects</h3>
          <p className="text-2xl font-bold mt-2">8</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
          <h3 className="text-gray-500 text-sm">Visitors</h3>
          <p className="text-2xl font-bold mt-2">1.2K</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
          <h3 className="text-gray-500 text-sm">Messages</h3>
          <p className="text-2xl font-bold mt-2">5</p>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Recent Activity
        </h2>

        <ul className="space-y-3 text-gray-600">
          <li>✅ New blog published</li>
          <li>🚀 Project updated</li>
          <li>📩 New message received</li>
          <li>📈 Traffic increased</li>
        </ul>
      </div>

    </div>
  );
};

export default DashBoard;