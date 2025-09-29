const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('password', 10)

  const user = await prisma.user.upsert({
    where: { email: 'cseahmed01@gamil.com' },
    update: {},
    create: {
      email: 'cseahmed01@gamil.com',
      password: hashedPassword,
      name: 'Admin User',
    },
  })

  console.log('User created:', user)

  // Seed About
  const about = await prisma.about.upsert({
    where: { id: 1 },
    update: {
      content: 'I am a passionate software engineer with expertise in web development, specializing in modern technologies like React, Next.js, and Node.js.',
    },
    create: {
      content: 'I am a passionate software engineer with expertise in web development, specializing in modern technologies like React, Next.js, and Node.js.',
    },
  })

  console.log('About created:', about)

  // Seed Contact
  const contact = await prisma.contact.upsert({
    where: { id: 1 },
    update: {
      email: 'cseahmed01@gmail.com',
      phone: '+880 123 456 7890',
      address: 'Dhaka, Bangladesh',
    },
    create: {
      email: 'cseahmed01@gmail.com',
      phone: '+880 123 456 7890',
      address: 'Dhaka, Bangladesh',
    },
  })

  console.log('Contact created:', contact)

  // Seed Technologies first (for projects)
  const techData = [
    'PHP', 'jQuery', 'Bootstrap', 'Bootstrap3', 'Bootstrap 5', 'CodeIgniter3', 'JavaScript',
    'Laravel 11', 'Laravel11', 'Next.js', 'NextJs15', 'Tailwind CSS', 'Prisma', 'React', 'Node.js', 'MongoDB'
  ]

  for (const techName of techData) {
    await prisma.technology.upsert({
      where: { name: techName },
      update: {},
      create: { name: techName },
    })
  }

  // Seed Projects
  const projects = [
    {
      title: 'Client Complaint Management System',
      description: 'A comprehensive system for managing client complaints with user-friendly interface, complaint tracking, and resolution management.',
      image: '/images/project1.jpg',
      link: '/projects',
      technologies: {
        connect: [
          { name: 'PHP' },
          { name: 'jQuery' },
          { name: 'Bootstrap' }
        ]
      }
    },
    {
      title: 'Vehicle Management System (CTM)',
      description: 'Complete vehicle tracking and management system for fleet operations, maintenance scheduling, and vehicle utilization analytics.',
      image: '/images/project2.jpg',
      link: '/projects',
      technologies: {
        connect: [
          { name: 'CodeIgniter3' },
          { name: 'Bootstrap3' }
        ]
      }
    },
    {
      title: 'Meeting Room Management System',
      description: 'Efficient meeting room booking and management system with calendar integration, availability checking, and automated notifications.',
      image: '/images/project3.jpg',
      link: '/projects',
      technologies: {
        connect: [
          { name: 'PHP' },
          { name: 'jQuery' },
          { name: 'Bootstrap3' }
        ]
      }
    },
    {
      title: 'Online News Portal',
      description: 'Dynamic news portal with content management, user engagement features, and responsive design for optimal user experience.',
      image: '/images/project4.jpg',
      link: '/projects',
      technologies: {
        connect: [
          { name: 'CodeIgniter3' },
          { name: 'JavaScript' },
          { name: 'Bootstrap3' }
        ]
      }
    },
    {
      title: 'University Management System (UMS)',
      description: 'Comprehensive university management solution handling student records, courses, and administrative tasks with modern UI.',
      image: '/images/project5.jpg',
      link: '/projects',
      technologies: {
        connect: [
          { name: 'Laravel 11' },
          { name: 'Bootstrap 5' }
        ]
      }
    },
    {
      title: 'Payroll Management System',
      description: 'Complete payroll processing system with employee management, salary calculations, tax computations, and reporting features.',
      image: '/images/project6.jpg',
      link: '/projects',
      technologies: {
        connect: [
          { name: 'Laravel11' }
        ]
      }
    },
    {
      title: 'Online News Portal CMS & Portal',
      description: 'Full-featured content management system and news portal with modern frontend architecture and robust backend implementation.',
      image: '/images/project7.jpg',
      link: '/projects',
      technologies: {
        connect: [
          { name: 'Laravel 11' },
          { name: 'NextJs15' }
        ]
      }
    },
  ]

  for (const project of projects) {
    await prisma.project.create({
      data: project,
    })
  }

  console.log('Projects created')

  // Seed Skills
  const skills = [
    { name: 'PHP', category: 'Backend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'Python', category: 'Backend' },
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'Bootstrap', category: 'Frontend' },
    { name: 'Laravel', category: 'Backend' },
    { name: 'CodeIgniter', category: 'Backend' },
    { name: 'Django', category: 'Backend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'MySQL', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
  ]

  for (const skill of skills) {
    await prisma.skill.upsert({
      where: { name: skill.name },
      update: {},
      create: skill,
    })
  }

  console.log('Skills created')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })