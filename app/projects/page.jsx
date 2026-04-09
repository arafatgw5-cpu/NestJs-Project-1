const Projects = () => {
  const projects = [
    {
      name: "Book Store App",
      desc: "React + Tailwind project with routing",
    },
    {
      name: "Portfolio Website",
      desc: "Modern personal portfolio",
    },
    {
      name: "Landing Page",
      desc: "Responsive landing page design",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-base-200 shadow-md hover:shadow-xl transition hover:-translate-y-2"
          >
            <h2 className="text-xl font-bold mb-2">{p.name}</h2>
            <p className="text-gray-500 mb-4">{p.desc}</p>
            <button className="btn btn-sm btn-primary">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;