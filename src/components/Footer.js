export default function Footer() {
  return (
    <footer className="bg-surface dark:bg-surface-dark py-8 border-t border-border">
      <div className="container-fluid text-center">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-text-secondary dark:text-text-secondary text-body-small">
            &copy; {new Date().getFullYear()} Nasim Ahamed. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="/"
              className="text-text-secondary dark:text-text-secondary hover:text-primary dark:hover:text-primary transition-colors text-body-small"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-text-secondary dark:text-text-secondary hover:text-primary dark:hover:text-primary transition-colors text-body-small"
            >
              About
            </a>
            <a
              href="/projects"
              className="text-text-secondary dark:text-text-secondary hover:text-primary dark:hover:text-primary transition-colors text-body-small"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="text-text-secondary dark:text-text-secondary hover:text-primary dark:hover:text-primary transition-colors text-body-small"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}