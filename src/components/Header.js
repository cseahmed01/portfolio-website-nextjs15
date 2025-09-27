'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-center relative dark:bg-gray-800">
        <div className="flex items-center">
          <Link href="/" className="flex items-center mr-8">
            <img src="/logo.svg" alt="N Logo" className="w-8 h-8 text-gray-900 dark:text-white" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">NASIM AHAMED</span>
          </Link>
          <div className="flex">
          <ul className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} 
              dark:border-gray-600 
              rounded-lg md:rounded-none
              p-4 md:p-0
              flex-col md:flex-row 
              space-y-3 md:space-y-0 md:space-x-1
              absolute md:static 
              top-full left-0 
              w-full md:w-auto 
              bg-white dark:bg-gray-900 
              md:bg-transparent md:dark:bg-transparent 
              shadow-xl md:shadow-none 
              z-20
              backdrop-blur-sm md:backdrop-blur-none
              transition-all duration-300 ease-in-out`}>
            
            <li className="relative group">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)} 
                className="block px-4 py-3 md:py-2 rounded-lg
                         text-gray-700 dark:text-gray-300 
                         bg-white dark:bg-gray-800
                         hover:bg-blue-50 dark:hover:bg-blue-900/20
                         hover:text-blue-600 dark:hover:text-blue-400
                         transition-all duration-200
                         border border-transparent
                         hover:border-blue-200 dark:hover:border-blue-800
                         shadow-sm hover:shadow-md
                         font-medium"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 md:block hidden"></span>
              </Link>
            </li>
            
            <li className="relative group">
              <Link 
                href="/about" 
                onClick={() => setIsMenuOpen(false)} 
                className="block px-4 py-3 md:py-2 rounded-lg
                         text-gray-700 dark:text-gray-300 
                         bg-white dark:bg-gray-800
                         hover:bg-green-50 dark:hover:bg-green-900/20
                         hover:text-green-600 dark:hover:text-green-400
                         transition-all duration-200
                         border border-transparent
                         hover:border-green-200 dark:hover:border-green-800
                         shadow-sm hover:shadow-md
                         font-medium"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300 md:block hidden"></span>
              </Link>
            </li>
            
            <li className="relative group">
              <Link 
                href="/projects" 
                onClick={() => setIsMenuOpen(false)} 
                className="block px-4 py-3 md:py-2 rounded-lg
                         text-gray-700 dark:text-gray-300 
                         bg-white dark:bg-gray-800
                         hover:bg-purple-50 dark:hover:bg-purple-900/20
                         hover:text-purple-600 dark:hover:text-purple-400
                         transition-all duration-200
                         border border-transparent
                         hover:border-purple-200 dark:hover:border-purple-800
                         shadow-sm hover:shadow-md
                         font-medium"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300 md:block hidden"></span>
              </Link>
            </li>
            
            <li className="relative group">
              <Link 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)} 
                className="block px-4 py-3 md:py-2 rounded-lg
                         text-gray-700 dark:text-gray-300 
                         bg-white dark:bg-gray-800
                         hover:bg-orange-50 dark:hover:bg-orange-900/20
                         hover:text-orange-600 dark:hover:text-orange-400
                         transition-all duration-200
                         border border-transparent
                         hover:border-orange-200 dark:hover:border-orange-800
                         shadow-sm hover:shadow-md
                         font-medium"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300 md:block hidden"></span>
              </Link>
            </li>
          </ul>
        </div>
       </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none z-20 relative ml-4 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-current mb-1 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-current mb-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-20 z-10 md:hidden backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </nav>
    </header>
  );
}