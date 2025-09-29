import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getProjects() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return projects.map(project => ({
    ...project,
    technologies: project.technologies ? JSON.parse(project.technologies) : []
  }))
}

export default async function Projects() {
  const projects = await getProjects()

  return (
    <main className="min-h-screen bg-gradient-to-br from-secondary/5 to-primary/5 dark:from-surface-dark dark:to-surface-dark">
      <div className="container-fluid py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-heading-1 font-bold text-text-primary dark:text-foreground mb-8 text-center animate-fade-in">
            My Projects
          </h1>
          <p className="text-body-large text-text-secondary dark:text-text-secondary max-w-3xl mx-auto mb-16 text-center animate-fade-in">
            Explore a collection of my recent work showcasing my expertise in full-stack development,
            from web applications to management systems. Each project demonstrates my commitment to
            clean code, user experience, and scalable solutions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-surface dark:bg-surface-dark rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                  <a
                    href={project.link}
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg focus-ring"
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