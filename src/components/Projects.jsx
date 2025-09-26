const Projects = () => {
  return (
    <section id="projects" className="min-h-screen p-8 bg-white">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Project One</h3>
          <p className="text-gray-700">A brief description of Project One.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Project Two</h3>
          <p className="text-gray-700">A brief description of Project Two.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Project Three</h3>
          <p className="text-gray-700">A brief description of Project Three.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
