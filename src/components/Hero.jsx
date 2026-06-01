import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gray-100 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-blue-900 mb-6">
          Citizen Grievance Redressal System
        </h1>

        <p className="text-xl text-gray-700 mb-8 max-w-3xl">
          Submit complaints, track grievance status, and connect with
          government departments through a transparent and efficient
          platform.
        </p>

        <div className="flex gap-4">
          <Link
            to="/new-complaint"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
          >
            Submit Complaint
          </Link>

          <Link
            to="/dashboard"
            className="border border-blue-900 text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50"
          >
            Track Status
          </Link>
        </div>
      </div>
    </section>
  );
}