export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-xl font-bold mb-4">
              Digital Grievance Portal
            </h2>

            <p className="text-gray-300">
              A citizen-centric platform for grievance
              registration and transparent complaint
              resolution.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>Services</li>
              <li>Track Status</li>
              <li>Login</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-300">
              support@grievance.gov.in
            </p>

            <p className="text-gray-300">
              +91 1800-123-456
            </p>
          </div>

        </div>

        <hr className="my-8 border-blue-700" />

        <p className="text-center text-gray-400">
          © 2026 Digital Grievance Portal. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}