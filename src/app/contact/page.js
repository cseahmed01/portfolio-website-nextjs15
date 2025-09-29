'use client'
import { useState, useEffect } from 'react'

export default function Contact() {
  const [contact, setContact] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Fetch contact data on component mount
  useEffect(() => {
    fetchContactData()
  }, [])

  const fetchContactData = async () => {
    try {
      const response = await fetch('/api/contact-info')
      const data = await response.json()
      setContact(data)
    } catch (error) {
      console.error('Error fetching contact data:', error)
      // Fallback data
      setContact({
        email: 'contact@example.com',
        phone: '+1 (555) 123-4567',
        address: 'Your Location'
      })
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus({ type: 'error', message: data.error })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!contact) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-accent/5 to-secondary/5 dark:from-surface-dark dark:to-surface-dark">
        <div className="container-fluid py-16">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-pulse">Loading...</div>
          </div>
        </div>
      </main>
    )
  }
  return (
    <main className="min-h-screen bg-gradient-to-br from-accent/5 to-secondary/5 dark:from-surface-dark dark:to-surface-dark">
      <div className="container-fluid py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-heading-1 font-bold text-text-primary dark:text-foreground mb-12 text-center animate-fade-in">
            Get In Touch
          </h1>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h2 className="text-heading-2 font-semibold text-text-primary dark:text-foreground mb-6">
                Let's Connect
              </h2>
              <p className="text-body text-text-secondary dark:text-text-secondary mb-6">
                I'm always interested in new opportunities and collaborations.
                Whether you have a project in mind, want to discuss technology,
                or just want to say hello, feel free to reach out!
              </p>
              <p className="text-body text-text-secondary dark:text-text-secondary mb-6">
                Currently available for freelance work and full-time positions.
                I specialize in back-end development with PHP and Python frameworks,
                and have extensive experience in full-stack web development.
              </p>
              <p className="text-body text-text-secondary dark:text-text-secondary mb-8">
                Response time is typically within 24 hours. For urgent inquiries,
                please call directly. I look forward to hearing from you and
                exploring how we can work together!
              </p>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-surface dark:bg-surface-dark rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary dark:text-foreground">Email</p>
                    <p className="text-text-secondary dark:text-text-secondary">{contact.email}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-surface dark:bg-surface-dark rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-accent/10 dark:bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-accent dark:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary dark:text-foreground">Phone</p>
                    <p className="text-text-secondary dark:text-text-secondary">{contact.phone || '+88 01795825188'}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-surface dark:bg-surface-dark rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-secondary dark:text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary dark:text-foreground">Location</p>
                    <p className="text-text-secondary dark:text-text-secondary">{contact.address || 'Dhaka, Bangladesh'}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-surface dark:bg-surface-dark rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary dark:text-foreground">Website</p>
                    <a href="https://nasimahamed.com" className="text-primary dark:text-primary hover:underline transition-colors">nasimahamed.com</a>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-surface dark:bg-surface-dark rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-text-secondary/10 dark:bg-text-secondary/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-text-secondary dark:text-text-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary dark:text-foreground">GitHub</p>
                    <a href="https://github.com/cseahmed01" className="text-primary dark:text-primary hover:underline transition-colors">github.com/cseahmed01</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface dark:bg-surface-dark rounded-xl shadow-xl p-8 animate-slide-in-right">
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-success/10 text-success border border-success/20'
                    : 'bg-error/10 text-error border border-error/20'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-body-small font-medium text-text-primary dark:text-foreground mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-surface dark:bg-surface-dark text-text-primary dark:text-foreground transition-all focus-ring"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-body-small font-medium text-text-primary dark:text-foreground mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-surface dark:bg-surface-dark text-text-primary dark:text-foreground transition-all focus-ring"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-body-small font-medium text-text-primary dark:text-foreground mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-surface dark:bg-surface-dark text-text-primary dark:text-foreground transition-all focus-ring resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus-ring flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}