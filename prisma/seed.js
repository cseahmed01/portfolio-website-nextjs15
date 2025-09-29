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

  // Seed Projects
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with Next.js and Tailwind CSS, featuring responsive design and smooth animations.',
      image: '/images/project1.jpg',
      link: 'https://example.com',
      technologies: JSON.stringify(['Next.js', 'Tailwind CSS', 'Prisma']),
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database.',
      image: '/images/project2.jpg',
      link: 'https://example.com',
      technologies: JSON.stringify(['React', 'Node.js', 'MongoDB']),
    },
  ]

  for (const project of projects) {
    await prisma.project.create({
      data: project,
    })
  }

  console.log('Projects created')
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