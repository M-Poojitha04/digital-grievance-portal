import {
  FaClipboardList,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
} from "react-icons/fa";

import ComplaintTable from "../components/ComplaintTable";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const complaints =
    JSON.parse(localStorage.getItem("complaints")) || [];

  const totalComplaints = complaints.length;
  const pendingComplaints = complaints.filter(
    (item) => item.status === "Pending"
  ).length;

  const resolvedComplaints = complaints.filter(
    (item) => item.status === "Resolved"
  ).length;

  const rejectedComplaints = complaints.filter(
    (item) => item.status === "Rejected"
  ).length;

  const cards = [
    {
      title: "Total Complaints",
      value: totalComplaints,
      icon: <FaClipboardList size={30} />,
      bg: "bg-blue-50",
    },
    {
      title: "Resolved",
      value: resolvedComplaints,
      icon: <FaCheckCircle size={30} />,
      bg: "bg-green-50",
    },
    {
      title: "Pending",
      value: pendingComplaints,
      icon: <FaClock size={30} />,
      bg: "bg-yellow-50",
    },
    {
      title: "Rejected",
      value: rejectedComplaints,
      icon: <FaTimesCircle size={30} />,
      bg: "bg-red-50",
    },
  ];

  return (
    <div className="md:flex min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-gray-100 p-4 md:p-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bg} p-5 rounded-xl shadow`}
            >
              <div className="mb-2 text-blue-900">
                {card.icon}
              </div>

              <h2 className="text-xl font-semibold">
                {card.title}
              </h2>

              <p className="text-3xl font-bold mt-2">
                {card.value}
              </p>
            </div>
          ))}
        </div>

        <ComplaintTable />
      </div>
    </div>
  );
}