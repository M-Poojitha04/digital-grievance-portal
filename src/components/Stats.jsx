export default function Stats() {
  const stats = [
    {
      title: "10,000+",
      subtitle: "Complaints Resolved"
    },
    {
      title: "95%",
      subtitle: "Resolution Rate"
    },
    {
      title: "50+",
      subtitle: "Departments"
    },
    {
      title: "24/7",
      subtitle: "Support"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-sm text-center"
            >
              <h2 className="text-3xl font-bold text-blue-900">
                {item.title}
              </h2>

              <p className="mt-2 text-gray-600">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}