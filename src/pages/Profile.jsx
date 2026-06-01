import { FaUserCircle } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">
        <div className="flex flex-col items-center">
          <FaUserCircle
            size={120}
            className="text-blue-900"
          />

          <h1 className="text-3xl font-bold mt-4">
            Poojitha
          </h1>

          <p className="text-gray-500">
            Citizen User
          </p>
        </div>

        <div className="mt-8 grid gap-4">
          <div>
            <label className="font-semibold">
              Email
            </label>

            <input
              type="text"
              value="poojitha@example.com"
              readOnly
              className="w-full border p-3 rounded-lg mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">
              Phone
            </label>

            <input
              type="text"
              value="+91 9876543210"
              readOnly
              className="w-full border p-3 rounded-lg mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">
              Address
            </label>

            <textarea
              readOnly
              className="w-full border p-3 rounded-lg mt-2"
              rows="3"
              value="Hyderabad, Telangana"
            />
          </div>
        </div>
      </div>
    </div>
  );
}