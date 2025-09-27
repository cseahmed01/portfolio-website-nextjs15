export default function Projects() {
  const projects = [
    {
      title: "Client Complaint Management System",
      description: "A comprehensive system for managing client complaints with user-friendly interface and efficient tracking capabilities.",
      technologies: ["PHP", "jQuery", "Bootstrap"],
      link: "#"
    },
    {
      title: "Vehicle Management System (CTM)",
      description: "Complete vehicle tracking and management solution for fleet operations and maintenance scheduling.",
      technologies: ["CodeIgniter3", "Bootstrap3"],
      link: "#"
    },
    {
      title: "Meeting Room Management System",
      description: "Efficient booking and management system for meeting rooms with scheduling and resource allocation features.",
      technologies: ["PHP", "jQuery", "Bootstrap3"],
      link: "#"
    },
    {
      title: "Online News Portal",
      description: "Dynamic news portal with content management, user engagement features, and responsive design.",
      technologies: ["CodeIgniter3", "JavaScript", "Bootstrap3"],
      link: "#"
    },
    {
      title: "University Management System (UMS)",
      description: "Comprehensive university management solution handling student records, courses, and administrative tasks.",
      technologies: ["Laravel 11", "Bootstrap 5"],
      link: "#"
    },
    {
      title: "Payroll Management System",
      description: "Complete payroll processing system with employee management, salary calculations, and reporting features.",
      technologies: ["Laravel 11"],
      link: "#"
    },
    {
      title: "Online News Portal CMS & Portal",
      description: "Full-featured content management system and news portal with modern frontend and robust backend architecture.",
      technologies: ["Laravel 11", "Next.js 15"],
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-black dark:to-black">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            My Projects
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}