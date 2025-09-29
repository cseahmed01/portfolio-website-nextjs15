import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

async function getProjects() {
  return await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

async function addProject(formData) {
  'use server'

  const title = formData.get('title')
  const description = formData.get('description')
  const image = formData.get('image')
  const link = formData.get('link')

  await prisma.project.create({
    data: {
      title,
      description,
      image: image || null,
      link: link || null,
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
            <div key={project.id} className="px-6 py-4 flex justify-between items-center">
              <div>
                <h4 className="text-sm font-medium text-gray-900">{project.title}</h4>
                <p className="text-sm text-gray-500">{project.description}</p>
              </div>
              <form action={deleteProject} className="inline">
                <input type="hidden" name="id" value={project.id} />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs"
                >
                  Delete
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}