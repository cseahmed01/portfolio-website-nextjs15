'use client'

import { useState } from 'react'

export default function EditProjectForm({ project, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    title: project.title,
    description: project.description,
    image: project.image || '',
    link: project.link || '',
    technologies: project.technologies.map(t => t.name).join(', ')
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('id', project.id)
    data.append('title', formData.title)
    data.append('description', formData.description)
    data.append('image', formData.image)
    data.append('link', formData.link)
    data.append('technologies', formData.technologies)

    await onUpdate(data)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <div className="bg-gray-50 p-4 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={3}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Project Link</label>
            <input
              type="url"
              value={formData.link}
              onChange={(e) => setFormData({...formData, link: e.target.value})}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Technologies</label>
            <input
              type="text"
              value={formData.technologies}
              onChange={(e) => setFormData({...formData, technologies: e.target.value})}
              placeholder="React, Node.js, MongoDB"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex space-x-2">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded text-sm"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="px-6 py-4 flex justify-between items-center">
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-900">{project.title}</h4>
        <p className="text-sm text-gray-500">{project.description}</p>
        {project.technologies.length > 0 && (
          <div className="mt-2">
            <p className="text-xs text-gray-400">Technologies:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {project.technologies.map((tech) => (
                <span key={tech.id} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs"
        >
          Edit
        </button>
        <button
          onClick={async () => {
            const formData = new FormData()
            formData.append('id', project.id)
            await onDelete(formData)
          }}
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs"
        >
          Delete
        </button>
      </div>
    </div>
  )
}