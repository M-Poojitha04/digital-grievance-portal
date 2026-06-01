import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaClipboardList,
  FaPlusCircle,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-blue-900 text-white p-4 flex justify-between items-center">
        <h1 className="font-bold">
          Grievance Portal
        </h1>

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
          bg-blue-900 text-white p-6
          fixed md:static
          top-0 left-0
          min-h-screen
          w-64
          transition-transform duration-300
          z-50
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        <h1 className="text-2xl font-bold mb-10">
          Grievance Portal
        </h1>

        <nav className="space-y-5">
          <Link
            to="/dashboard"
            className="flex items-center gap-3"
          >
            <FaHome />
            Dashboard
          </Link>

          <Link
            to="/new-complaint"
            className="flex items-center gap-3"
          >
            <FaPlusCircle />
            New Complaint
          </Link>

          <Link
            to="/dashboard"
            className="flex items-center gap-3"
          >
            <FaClipboardList />
            Complaint History
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-3"
          >
            <FaUser />
            Profile
          </Link>
        </nav>
      </div>
    </>
  );
}