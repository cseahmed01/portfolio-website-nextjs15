import Image from 'next/image';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import TypingAnimation from './TypingAnimation';

const prisma = new PrismaClient();

async function getUser() {
  try {
    return await prisma.user.findFirst() || { name: 'Nasim Ahamed' };
  } catch {
    return { name: 'Nasim Ahamed' };
  }
}

async function getAbout() {
  try {
    return await prisma.about.findFirst() || { content: 'I am a passionate software engineer with expertise in web development, specializing in modern technologies like React, Next.js, and Node.js.' };
  } catch {
    return { content: 'I am a passionate software engineer with expertise in web development, specializing in modern technologies like React, Next.js, and Node.js.' };
  }
}

async function getSkills() {
  try {
    return await prisma.skill.findMany({
      orderBy: { createdAt: 'desc' }
    });
  } catch {
    return [
      { name: 'PHP' },
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Bootstrap' },
      { name: 'Laravel' },
      { name: 'CodeIgniter' },
      { name: 'Django' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' }
    ];
  }
}

async function getFeaturedProjects() {
  try {
    return await prisma.project.findMany({
      include: {
        technologies: true
      },
      orderBy: { createdAt: 'desc' },
      take: 3
    });
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
      }
    ];
  }
}

async function getProjectCount() {
  try {
    return await prisma.project.count();
  } catch {
    return 7;
  }
}

async function getSkillCount() {
  try {
    return await prisma.skill.count();
  } catch {
    return 14;
  }
}

export default async function Home() {
  const user = await getUser();
  const about = await getAbout();
  const skills = await getSkills();
  const skillNames = skills.map(skill => skill.name);
  const featuredProjects = await getFeaturedProjects();
  const projectCount = await getProjectCount();
  const skillCount = await getSkillCount();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'Email', url: 'mailto:contact@example.com', icon: '✉️' }
  ];

  const stats = [
    { number: `${projectCount}+`, label: 'Projects Completed', icon: '🚀' },
    { number: '5+', label: 'Years Experience', icon: '⏰' },
    { number: `${skillCount}+`, label: 'Technologies', icon: '🛠️' },
    { number: '100%', label: 'Client Satisfaction', icon: '⭐' }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, TechCorp',
      content: 'Exceptional work quality and timely delivery. Highly recommended for any web development project.',
      avatar: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      role: 'Project Manager, InnovateLab',
      content: 'Professional approach and excellent communication throughout the project lifecycle.',
      avatar: '👩‍💻'
    }
  ];


  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/3 to-accent/5 dark:from-surface-dark dark:via-surface-secondary-dark dark:to-surface-dark flex items-center relative overflow-hidden">
        {/* Professional Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-10 right-1/4 w-24 h-24 bg-success/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container-fluid py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-slide-in-left">
              <h1 className="text-display font-bold text-text-primary dark:text-foreground mb-6">
                Hi, I'm <span className="text-primary dark:text-primary">{user?.name || 'Nasim'}</span>
              </h1>
              <div className="mb-6">
                <p className="text-body-large text-text-secondary dark:text-text-secondary mb-2">
                  A passionate Back-end Developer skilled in
                </p>
                <TypingAnimation skills={skillNames} />
              </div>
              <p className="text-body-large text-text-secondary dark:text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                Creating amazing digital experiences with clean, efficient code and modern web technologies.
              </p>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-surface dark:bg-surface-dark hover:bg-primary hover:text-white text-text-primary dark:text-foreground p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl focus-ring"
                    aria-label={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>

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

              {/* Professional Statistics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-8 border-t border-border/30">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-professional">
                      <span className="text-2xl">{stat.icon}</span>
                    </div>
                    <div className="text-heading-2 font-bold text-primary dark:text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-body-small text-text-secondary dark:text-text-secondary font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative group">
                  <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-accent/20 to-secondary/30 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-700 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-surface/80 to-surface-dark/80 dark:from-surface-dark/80 dark:to-surface/80 backdrop-blur-sm p-2 rounded-3xl shadow-2xl animate-gentle-rotate">
                    <Image
                      src="/images/nasim.jpg"
                      alt={user?.name || 'Nasim'}
                      width={400}
                      height={500}
                      className="rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-500"
                      priority
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 bg-primary text-white p-4 rounded-2xl shadow-xl animate-float">
                  <span className="text-2xl">🚀</span>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-accent text-white p-4 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">💻</span>
                </div>

                <div className="absolute top-1/2 -right-8 bg-secondary text-white p-3 rounded-xl shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-xl">⚡</span>
                </div>

                {/* Interactive Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full shadow-lg animate-bounce z-20 group-hover:animate-pulse">
                  <span className="text-sm font-semibold flex items-center gap-2">
                    👋 Available for work
                  </span>
                </div>

                {/* Skill Tags Floating Around */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-surface dark:bg-surface-dark px-3 py-1 rounded-full shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                  <span className="text-xs font-medium text-primary">{skillNames[0] || 'PHP'}</span>
                </div>

                <div className="absolute top-1/4 -left-16 bg-surface dark:bg-surface-dark px-3 py-1 rounded-full shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                  <span className="text-xs font-medium text-accent">{skillNames[1] || 'React'}</span>
                </div>

                <div className="absolute bottom-1/4 -right-16 bg-surface dark:bg-surface-dark px-3 py-1 rounded-full shadow-lg animate-float" style={{ animationDelay: '2.5s' }}>
                  <span className="text-xs font-medium text-secondary">{skillNames[2] || 'Laravel'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-text-secondary dark:text-text-secondary">
              <span className="text-body-small mb-2">Scroll Down</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
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
          {skillNames.length === 0 ? (
            <div className="text-center text-text-secondary dark:text-text-secondary">
              <p>No skills added yet. Check back soon!</p>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {skillNames.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full text-body-small font-medium shadow-lg transform hover:scale-110 hover:shadow-xl transition-all duration-300 animate-scale-in focus-ring"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-surface to-border/20 dark:from-surface-dark dark:to-border/10">
        <div className="container-fluid">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-heading-1 font-bold text-text-primary dark:text-foreground mb-6">
              About Me
            </h2>
            <p className="text-body-large text-text-secondary dark:text-text-secondary max-w-2xl mx-auto">
              {about.content}
            </p>
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
            {featuredProjects.length === 0 ? (
              <div className="col-span-full text-center text-text-secondary dark:text-text-secondary">
                <p>No projects added yet. Check back soon!</p>
              </div>
            ) : (
              featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-surface dark:bg-surface-dark rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in group"
                  style={{ animationDelay: `${index * 0.2}s` }}
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
                    <Link
                      href={project.link}
                      className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg focus-ring"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            )}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-surface-secondary to-surface dark:from-surface-secondary-dark dark:to-surface-dark">
        <div className="container-fluid">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-heading-1 font-bold text-text-primary dark:text-foreground mb-6">
              What Clients Say
            </h2>
            <p className="text-body-large text-text-secondary dark:text-text-secondary max-w-2xl mx-auto">
              Don't just take my word for it - here's what clients have to say about working with me
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-surface dark:bg-surface-dark p-8 rounded-2xl shadow-professional hover:shadow-professional-dark transition-all duration-300 animate-scale-in border border-border/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-xl mr-4 shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary dark:text-foreground">{testimonial.name}</h4>
                    <p className="text-body-small text-text-secondary dark:text-text-secondary">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-body text-text-secondary dark:text-text-secondary italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex text-accent mt-4">
                  {'★'.repeat(5)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-light to-accent text-white relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container-fluid text-center relative z-10 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-1 font-bold mb-6 leading-tight">
              Ready to Bring Your Ideas to Life?
            </h2>
            <p className="text-body-large mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate on your next project. Whether it's a web application, mobile app, or complex system,
              I'm here to help you achieve your goals with clean, efficient, and scalable solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-gray-50 font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-professional focus-ring text-lg"
              >
                🚀 Start Your Project
              </Link>
              <Link
                href="/projects"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 focus-ring text-lg"
              >
                📂 View My Work
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
              <div className="glass-effect rounded-xl p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-sm opacity-90">Quick turnaround without compromising quality</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2">Quality Focused</h3>
                <p className="text-sm opacity-90">Clean, maintainable, and scalable code</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-semibold mb-2">Full Support</h3>
                <p className="text-sm opacity-90">Complete project lifecycle support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
