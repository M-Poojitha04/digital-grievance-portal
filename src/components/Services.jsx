export default function Services() {
  const services = [
    "Road & Infrastructure",
    "Water Supply",
    "Electricity",
    "Public Health",
    "Education",
    "Municipal Services"
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">
                {service}
              </h3>

              <p className="mt-4 text-gray-600">
                Raise grievances and track
                complaint resolution for {service}.
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}