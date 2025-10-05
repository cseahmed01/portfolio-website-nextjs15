import Link from 'next/link'
import Image from 'next/image'
import { prisma } from '../../lib/prisma'

async function getProjects() {
  try {
    return await prisma.project.findMany({
      include: {
        technologies: true
      },
      orderBy: { createdAt: 'desc' }
    })
  } catch {
    return [
      {
        id: 1,
        title: 'Client Complaint Management System',
        description: 'A comprehensive system for managing client complaints with user-friendly interface, complaint tracking, and resolution management.',
        image: '/images/project1.jpg',
        link: '/projects',
        technologies: [{ name: 'PHP' }, { name: 'jQuery' }, { name: 'Bootstrap' }]
      },
      {
        id: 2,
        title: 'Vehicle Management System (CTM)',
        description: 'Complete vehicle tracking and management system for fleet operations, maintenance scheduling, and vehicle utilization analytics.',
        image: '/images/project2.jpg',
        link: '/projects',
        technologies: [{ name: 'CodeIgniter3' }, { name: 'Bootstrap3' }]
      },
      {
        id: 3,
        title: 'Meeting Room Management System',
        description: 'Efficient meeting room booking and management system with calendar integration, availability checking, and automated notifications.',
        image: '/images/project3.jpg',
        link: '/projects',
        technologies: [{ name: 'PHP' }, { name: 'jQuery' }, { name: 'Bootstrap3' }]
      },
      {
        id: 4,
        title: 'Online News Portal',
        description: 'Dynamic news portal with content management, user engagement features, and responsive design for optimal user experience.',
        image: '/images/project4.jpg',
        link: '/projects',
        technologies: [{ name: 'CodeIgniter3' }, { name: 'JavaScript' }, { name: 'Bootstrap3' }]
      },
      {
        id: 5,
        title: 'University Management System (UMS)',
        description: 'Comprehensive university management solution handling student records, courses, and administrative tasks with modern UI.',
        image: '/images/project5.jpg',
        link: '/projects',
        technologies: [{ name: 'Laravel 11' }, { name: 'Bootstrap 5' }]
      },
      {
        id: 6,
        title: 'Payroll Management System',
        description: 'Complete payroll processing system with employee management, salary calculations, tax computations, and reporting features.',
        image: '/images/project6.jpg',
        link: '/projects',
        technologies: [{ name: 'Laravel11' }]
      },
      {
        id: 7,
        title: 'Online News Portal CMS & Portal',
        description: 'Full-featured content management system and news portal with modern frontend architecture and robust backend implementation.',
        image: '/images/project7.jpg',
        link: '/projects',
        technologies: [{ name: 'Laravel 11' }, { name: 'NextJs15' }]
      }
    ]
  }
}

export const metadata = {
  title: "Projects Portfolio | Nasim Ahamed - Full Stack Developer",
  description: "Explore my portfolio of web development projects including PHP Laravel applications, React Next.js websites, and full-stack solutions. View detailed case studies and technologies used.",
  keywords: [
    "web development projects",
    "portfolio projects",
    "PHP Laravel projects",
    "React Next.js projects",
    "full stack development",
    "web applications",
    "case studies",
    "project portfolio",
    "Nasim Ahamed projects"
  ],
  openGraph: {
    title: "Projects Portfolio | Nasim Ahamed - Full Stack Developer",
    description: "Explore my portfolio of web development projects including PHP Laravel applications, React Next.js websites, and full-stack solutions.",
    url: 'https://nasimahamed.dev/projects',
    siteName: 'Nasim Ahamed Portfolio',
    images: [
      {
        url: '/images/projects-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Nasim Ahamed Projects Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Projects Portfolio | Nasim Ahamed - Full Stack Developer",
    description: "Explore my portfolio of web development projects including PHP Laravel applications, React Next.js websites.",
    images: ['/images/projects-og.jpg'],
  },
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
                key={project.id}
                className="bg-surface dark:bg-surface-dark rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-heading-3 font-semibold text-text-primary dark:text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-body text-text-secondary dark:text-text-secondary mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.id}
                        className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary px-3 py-1 rounded-full text-body-small font-medium"
                      >
                        {tech.name}
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