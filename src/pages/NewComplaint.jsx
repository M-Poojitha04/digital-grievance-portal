import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewComplaint() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    priority: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingComplaints =
      JSON.parse(localStorage.getItem("complaints")) || [];

    const newComplaint = {
      id: `GRV${Date.now()}`,
      ...formData,
      status: "Pending",
      date: new Date().toLocaleDateString(),
    };

    existingComplaints.push(newComplaint);

    localStorage.setItem(
      "complaints",
      JSON.stringify(existingComplaints)
    );

    alert("Complaint submitted successfully!");

    setFormData({
      title: "",
      department: "",
      priority: "",
      description: "",
    });

    navigate("/dashboard");
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">
        Submit New Grievance
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow space-y-6"
      >
        <div>
          <label className="block mb-2 font-medium">
            Complaint Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            placeholder="Enter complaint title"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">
              Department
            </label>

            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            >
              <option value="">Select</option>
              <option>Water Supply</option>
              <option>Electricity</option>
              <option>Roads</option>
              <option>Health</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Priority
            </label>

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            >
              <option value="">Select</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Description
          </label>

          <textarea
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            placeholder="Describe your grievance..."
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Upload Document
          </label>

          <input
            type="file"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
        >
          Submit Grievance
        </button>
      </form>
    </div>
  );
}