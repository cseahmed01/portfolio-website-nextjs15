import Link from 'next/link'

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">CMS Dashboard</h2>
          </div>
          <nav className="mt-6">
            <Link
              href="/dashboard"
              className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/projects"
              className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Projects
            </Link>
            <Link
              href="/dashboard/about"
              className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="/dashboard/contact"
              className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <header className="bg-white shadow-sm px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Portfolio CMS</h1>
              <form action="/api/logout" method="post">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </form>
            </div>
          </header>
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}