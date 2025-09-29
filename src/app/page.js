import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const skills = [
    'PHP', 'JavaScript', 'Python', 'HTML', 'CSS', 'Bootstrap',
    'Laravel', 'CodeIgniter', 'Django', 'React', 'Next.js',
    'MySQL', 'PostgreSQL', 'MongoDB'
  ];

  const featuredProjects = [
    {
      title: "University Management System",
      description: "Comprehensive university management solution handling student records, courses, and administrative tasks.",
      technologies: ["Laravel 11", "Bootstrap 5"],
      link: "/projects"
    },
    {
      title: "Online News Portal CMS & Portal",
      description: "Full-featured content management system and news portal with modern frontend and robust backend architecture.",
      technologies: ["Laravel 11", "Next.js 15"],
      link: "/projects"
    },
    {
      title: "Payroll Management System",
      description: "Complete payroll processing system with employee management, salary calculations, and reporting features.",
      technologies: ["Laravel 11"],
      link: "/projects"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 dark:from-surface-dark dark:via-surface-dark dark:to-surface-dark flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container-fluid py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-slide-in-left">
              <h1 className="text-display font-bold text-text-primary dark:text-foreground mb-6">
                Hi, I'm <span className="text-primary dark:text-primary">Nasim</span>
              </h1>
              <p className="text-body-large text-text-secondary dark:text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                A passionate Back-end Developer skilled in PHP, JavaScript, Python, and modern web technologies.
                Creating amazing digital experiences with clean, efficient code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/projects"
                  className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg focus-ring"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="bg-surface dark:bg-surface-dark hover:bg-border dark:hover:bg-border text-text-primary dark:text-foreground font-semibold py-3 px-8 rounded-lg border border-border transition-all duration-300 transform hover:scale-105 shadow-lg focus-ring"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Image
                  src="/images/nasim.jpg"
                  alt="Nasim Ahame"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 relative z-10"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-accent text-white p-4 rounded-full shadow-lg animate-bounce z-20">
                  <span className="text-2xl">👋</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-surface dark:bg-surface-dark">
        <div className="container-fluid">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-heading-1 font-bold text-text-primary dark:text-foreground mb-6">
              My Skills
            </h2>
            <p className="text-body-large text-text-secondary dark:text-text-secondary max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full text-body-small font-medium shadow-lg transform hover:scale-110 hover:shadow-xl transition-all duration-300 animate-scale-in focus-ring"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-to-br from-surface to-border/20 dark:from-surface-dark dark:to-border/10">
        <div className="container-fluid">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-heading-1 font-bold text-text-primary dark:text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-body-large text-text-secondary dark:text-text-secondary max-w-2xl mx-auto">
              Some of my recent work that showcases my expertise and passion
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-surface dark:bg-surface-dark rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-6">
                  <h3 className="text-heading-3 font-semibold text-text-primary dark:text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-body text-text-secondary dark:text-text-secondary mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary px-3 py-1 rounded-full text-body-small font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg focus-ring"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in">
            <Link
              href="/projects"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus-ring"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        </div>

        <div className="container-fluid text-center relative z-10 animate-fade-in">
          <h2 className="text-heading-1 font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-body-large mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus-ring"
            >
              Contact Me
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus-ring"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
