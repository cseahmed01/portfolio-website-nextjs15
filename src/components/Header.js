'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { href: '/', label: 'Home', color: 'blue' },
    { href: '/about', label: 'About', color: 'green' },
    { href: '/projects', label: 'Projects', color: 'purple' },
    { href: '/contact', label: 'Contact', color: 'orange' },
    { href: '/login', label: 'Login', color: 'red' }
  ];

  return (
    <header className="bg-surface dark:bg-surface-dark shadow-sm border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <nav className="container-fluid py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center group relative z-60">
          <Logo />
          <span className="ml-3 text-heading-3 font-bold text-text-primary dark:text-foreground">NASIM AHAMED</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map(({ href, label, color }) => (
              <li key={href} className="relative group">
                <Link
                  href={href}
                  className="block px-4 py-2 rounded-lg text-text-secondary dark:text-text-secondary hover:text-primary dark:hover:text-primary transition-all duration-300 hover:bg-surface dark:hover:bg-surface-dark font-medium"
                >
                  {label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-${color}-500 group-hover:w-full transition-all duration-300`}></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-surface dark:bg-surface-dark hover:bg-border dark:hover:bg-border transition-colors focus-ring"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-surface dark:bg-surface-dark hover:bg-border dark:hover:bg-border transition-colors focus-ring"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 rounded-xl bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus-ring"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 relative">
              <span className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2' : 'top-1'}`}></span>
              <span className={`absolute block w-5 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'top-2'}`}></span>
              <span className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2' : 'top-3'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed top-12 left-0 w-full bg-surface dark:bg-surface-dark border-b border-border shadow-lg transition-all duration-300 z-40 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg bg-surface dark:bg-surface-dark hover:bg-border dark:hover:bg-border transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col px-4 pb-4 space-y-2">
            {navItems.map(({ href, label, color }) => (
              <li key={href} className="relative group">
                <Link
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-text-secondary dark:text-text-secondary hover:text-primary dark:hover:text-primary transition-all duration-300 hover:bg-surface dark:hover:bg-surface-dark font-medium"
                >
                  {label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-${color}-500 group-hover:w-full transition-all duration-300`}></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-20 z-30 md:hidden backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </nav>
    </header>
  );
}