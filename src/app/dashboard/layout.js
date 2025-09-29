import Link from 'next/link'

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg flex flex-col">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">CMS Dashboard</h2>
          </div>
          <nav className="mt-6 px-4 space-y-2 flex-1">
            <Link
              href="/dashboard"
              className="block w-full px-4 py-3 text-gray-700 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md font-medium"
            >
              📊 Dashboard
            </Link>
            <Link
              href="/dashboard/projects"
              className="block w-full px-4 py-3 text-gray-700 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md font-medium"
            >
              🚀 Projects
            </Link>
            <Link
              href="/dashboard/skills"
              className="block w-full px-4 py-3 text-gray-700 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md font-medium"
            >
              🛠️ Skills
            </Link>
            <Link
              href="/dashboard/about"
              className="block w-full px-4 py-3 text-gray-700 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md font-medium"
            >
              👤 About
            </Link>
            <Link
              href="/dashboard/contact-info"
              className="block w-full px-4 py-3 text-gray-700 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md font-medium"
            >
              📞 Contact Info
            </Link>
            <Link
              href="/dashboard/contact"
              className="block w-full px-4 py-3 text-gray-700 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md font-medium"
            >
              💬 Messages
            </Link>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <header className="bg-white shadow-sm px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Portfolio CMS</h1>
              <form action="/api/logout" method="post">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 disabled:cursor-not-allowed cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span>Logout</span>
                </button>
              </form>
            </div>
          </header>
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}