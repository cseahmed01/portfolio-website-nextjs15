'use client'
import { useState, useEffect } from 'react'

export default function ContactInfo() {
  const [contactInfo, setContactInfo] = useState({
    email: '',
    phone: '',
    address: ''
  })
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState(null)

  useEffect(() => {
    fetchContactInfo()
  }, [])

  const fetchContactInfo = async () => {
    try {
      const response = await fetch('/api/contact-info')
      const data = await response.json()
      setContactInfo(data)
    } catch (error) {
      console.error('Error fetching contact info:', error)
      setSaveStatus({ type: 'error', message: 'Failed to load contact information' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setContactInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSaving(true)
    setSaveStatus(null)

    try {
      const response = await fetch('/api/contact-info', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactInfo),
      })

      const data = await response.json()

      if (response.ok) {
        setSaveStatus({ type: 'success', message: 'Contact information updated successfully!' })
      } else {
        setSaveStatus({ type: 'error', message: data.error || 'Failed to update contact information' })
      }
    } catch (error) {
      setSaveStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
          Manage Public Contact Info
        </span>
      </div>

      {saveStatus && (
        <div className={`p-4 rounded-lg ${
          saveStatus.type === 'success'
            ? 'bg-green-50 text-green-800 border border-green-200'
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {saveStatus.message}
        </div>
      )}

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Public Contact Information</h3>
            <p className="text-gray-600 text-sm">
              This information will be displayed on your contact page for visitors to reach you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactInfo.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white text-gray-900 transition-all"
                placeholder="your.email@example.com"
              />
              <p className="text-xs text-gray-500 mt-1">
                This email will be visible to visitors and used for contact forms
              </p>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={contactInfo.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white text-gray-900 transition-all"
                placeholder="+1 (555) 123-4567"
              />
              <p className="text-xs text-gray-500 mt-1">
                Optional: Leave blank if you don't want to display a phone number
              </p>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                Location/Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={contactInfo.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white text-gray-900 transition-all"
                placeholder="City, Country"
              />
              <p className="text-xs text-gray-500 mt-1">
                Optional: Your location or address information
              </p>
            </div>

            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={fetchContactInfo}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="px-6 py-2 bg-primary hover:bg-primary-dark disabled:bg-primary/50 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex items-center"
              >
                {isSaving ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving...
                  </>
                ) : (
                  'Save Changes'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Preview Your Contact Information
            </h3>
            <div className="mt-2 text-sm text-blue-700">
              <p><strong>Email:</strong> {contactInfo.email || 'Not set'}</p>
              <p><strong>Phone:</strong> {contactInfo.phone || 'Not set'}</p>
              <p><strong>Address:</strong> {contactInfo.address || 'Not set'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}