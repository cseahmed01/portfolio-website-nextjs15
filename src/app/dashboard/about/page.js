import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

async function getAbout() {
  return await prisma.about.findFirst() || { id: null, content: '' }
}

async function updateAbout(formData) {
  'use server'

  const content = formData.get('content')

  await prisma.about.upsert({
    where: { id: 1 },
    update: { content },
    create: { content },
  })

  revalidatePath('/dashboard/about')
}

export default async function AboutPage() {
  const about = await getAbout()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">About Management</h2>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Edit About Content</h3>
        <form action={updateAbout} className="space-y-4">
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              name="content"
              id="content"
              rows={10}
              defaultValue={about.content}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your about content here..."
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Update About
          </button>
        </form>
      </div>
    </div>
  )
}