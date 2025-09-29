import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

async function getSkills() {
  return await prisma.skill.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

async function addSkill(formData) {
  'use server'

  const name = formData.get('name')
  const category = formData.get('category')

  await prisma.skill.create({
    data: {
      name,
      category: category || null,
    },
  })

  revalidatePath('/dashboard/skills')
}

async function deleteSkill(formData) {
  'use server'

  const id = parseInt(formData.get('id'))

  await prisma.skill.delete({
    where: { id },
  })

  revalidatePath('/dashboard/skills')
}

export default async function SkillsPage() {
  const skills = await getSkills()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Skills Management</h2>
      </div>

      {/* Add Skill Form */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Skill</h3>
        <form action={addSkill} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Skill Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g., React, Node.js, Python"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category (Optional)
              </label>
              <select
                name="category"
                id="category"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select Category</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Database">Database</option>
                <option value="DevOps">DevOps</option>
                <option value="Mobile">Mobile</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Add Skill
          </button>
        </form>
      </div>

      {/* Skills List */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Existing Skills</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {skills.length === 0 ? (
            <div className="px-6 py-8 text-center text-gray-500">
              No skills added yet. Add your first skill above.
            </div>
          ) : (
            skills.map((skill) => (
              <div key={skill.id} className="px-6 py-4 flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{skill.name}</h4>
                  {skill.category && (
                    <p className="text-sm text-gray-500">{skill.category}</p>
                  )}
                </div>
                <form action={deleteSkill} className="inline">
                  <input type="hidden" name="id" value={skill.id} />
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs"
                  >
                    Delete
                  </button>
                </form>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}