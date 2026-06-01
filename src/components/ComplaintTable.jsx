export default function ComplaintTable() {
  const complaints =
    JSON.parse(localStorage.getItem("complaints")) || [];

  const getStatusColor = (status) => {
    if (status === "Resolved")
      return "bg-green-100 text-green-700";

    if (status === "Pending")
      return "bg-yellow-100 text-yellow-700";

    return "bg-red-100 text-red-700";
  };

  if (complaints.length === 0) {
    return (
      <div className="bg-white mt-10 p-10 rounded-xl shadow text-center">
        No complaints submitted yet.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow mt-10 overflow-x-auto">
      <table className="min-w-[700px] w-full">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="p-4 text-left">Complaint ID</th>
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Department</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {complaints.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-4">{item.id}</td>
              <td className="p-4">{item.title}</td>
              <td className="p-4">{item.department}</td>
              <td className="p-4">{item.date}</td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}