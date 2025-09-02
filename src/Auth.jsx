import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaTrashAlt, FaRegChartBar, FaComments, FaClipboardList, FaTachometerAlt } from "react-icons/fa";
import { MdOutlineTrackChanges, MdWorkOutline } from "react-icons/md";

function HomePage() {

    const navigate = useNavigate();
    
  return (
    <div className="min-h-screen flex flex-col bg-green-100">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-green-600 text-white shadow-md">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center font-bold">
            ♻
          </div>
          <h1 className="text-2xl font-bold">ZeroWaste</h1>
        </div>
        <div className="space-x-4">
          {/* <button className="bg-white text-green-600 font-semibold px-4 py-2 rounded-xl shadow hover:bg-gray-100">
            Login
          </button>
          <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-xl shadow hover:bg-yellow-300">
            Register
          </button> */}
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-green-600 font-semibold px-4 py-2 rounded-xl shadow hover:bg-gray-100"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-xl shadow hover:bg-yellow-300"
          >
            Register
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-10">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Welcome to Our ZeroWaste Platform
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Smart Waste Pickup & Recycling Platform
          </p>

          {/* Features */}
          <h3 className="text-xl font-semibold mb-4 text-green-700">Main Features</h3>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-center gap-2">
              <FaUsers className="text-green-600" /> User Management
            </li>
            <li className="flex items-center gap-2">
              <FaTrashAlt className="text-green-600" /> Waste Scheduling
            </li>
            <li className="flex items-center gap-2">
              <FaClipboardList className="text-red-500" /> Smart Matching
            </li>
            <li className="flex items-center gap-2">
              <FaComments className="text-blue-500" /> Communication
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineTrackChanges className="text-purple-500" /> Tracking
            </li>
            <li className="flex items-center gap-2">
              <MdWorkOutline className="text-orange-500" /> Opportunity Management
            </li>
            <li className="flex items-center gap-2">
              <FaTachometerAlt className="text-gray-600" /> Admin Dashboard
            </li>
          </ul>
        </div>

        {/* Images */}
        <div className="mt-10 md:mt-0 flex flex-col gap-6">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.evTBmEbyz49a9dyc_U3H-QHaEQ?pid=Api&P=0&h=180"
            alt="Recycle Hand"
            className="rounded-2xl shadow-md w-72 h-44 object-cover"
          />
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.VJuq1lHheqKF01nTzT7VUgHaEo?pid=Api&P=0&h=180"
            alt="Recycle Bag"
            className="rounded-2xl shadow-md w-72 h-44 object-cover"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white p-6 mt-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">📞 +91XXXXXXXXXX</p>
        <p className="text-sm">✉ teamc@gmail.com</p>
      </footer>
    </div>
  );
}

export default HomePage;
