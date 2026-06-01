import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Digital Grievance Portal
        </h1>

        <ul className="flex gap-6">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">Services</li>
          <li className="cursor-pointer hover:text-gray-300">Track Status</li>
          <Link to="/login">
            <li className="cursor-pointer hover:text-gray-300">
              Login
            </li>
          </Link>        
        </ul>
      </div>
    </nav>
  );
}