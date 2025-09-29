import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import EditProjectForm from './EditProjectForm'

const prisma = new PrismaClient()

async function getProjects() {
  return await prisma.project.findMany({
    include: {
      technologies: true
    },
    orderBy: { createdAt: 'desc' }
  })
}

async function addProject(formData) {
  'use server'

  const title = formData.get('title')
  const description = formData.get('description')
  const image = formData.get('image')
  const link = formData.get('link')
  const technologiesInput = formData.get('technologies')

  // Parse technologies from comma-separated string
  const technologyNames = technologiesInput
    ? technologiesInput.split(',').map(name => name.trim()).filter(name => name)
    : []

  // Create or connect technologies
  const technologyData = await Promise.all(
    technologyNames.map(async (name) => {
      const existingTech = await prisma.technology.findUnique({
        where: { name }
      })
      if (existingTech) {
        return { id: existingTech.id }
      } else {
        const newTech = await prisma.technology.create({
          data: { name }
        })
        return { id: newTech.id }
      }
    })
  )

  await prisma.project.create({
    data: {
      title,
      description,
      image: image || null,
      link: link || null,
      technologies: {
        connect: technologyData
      }
    },
  })

  revalidatePath('/dashboard/projects')
}

async function updateProject(formData) {
  'use server'

  const id = parseInt(formData.get('id'))
  const title = formData.get('title')
  const description = formData.get('description')
  const image = formData.get('image')
  const link = formData.get('link')
  const technologiesInput = formData.get('technologies')

  // Parse technologies from comma-separated string
  const technologyNames = technologiesInput
    ? technologiesInput.split(',').map(name => name.trim()).filter(name => name)
    : []

  // Create or connect technologies
  const technologyData = await Promise.all(
    technologyNames.map(async (name) => {
      const existingTech = await prisma.technology.findUnique({
        where: { name }
      })
      if (existingTech) {
        return { id: existingTech.id }
      } else {
        const newTech = await prisma.technology.create({
          data: { name }
        })
        return { id: newTech.id }
      }
    })
  )

  await prisma.project.update({
    where: { id },
    data: {
      title,
      description,
      image: image || null,
      link: link || null,
      technologies: {
        set: [], // Clear existing connections
        connect: technologyData
      }
    },
  })

  revalidatePath('/dashboard/projects')
}

async function deleteProject(formData) {
  'use server'

  const id = parseInt(formData.get('id'))

  await prisma.project.delete({
    where: { id },
  })

  revalidatePath('/dashboard/projects')
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Projects Management</h2>
      </div>

      {/* Add Project Form */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Project</h3>
        <form action={addProject} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows={3}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              id="image"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="link" className="block text-sm font-medium text-gray-700">
              Project Link
            </label>
            <input
              type="url"
              name="link"
              id="link"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">
              Technologies
            </label>
            <input
              type="text"
              name="technologies"
              id="technologies"
              placeholder="React, Node.js, MongoDB"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <p className="mt-1 text-sm text-gray-500">Enter technologies separated by commas</p>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Add Project
          </button>
        </form>
      </div>

      {/* Projects List */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Existing Projects</h3>
        </div>
        <div className="divide-y divide-gray-200">
           {projects.map((project) => (
             <EditProjectForm
               key={project.id}
               project={project}
               onUpdate={updateProject}
               onDelete={deleteProject}
             />
           ))}
         </div>
      </div>
    </div>
  )
}