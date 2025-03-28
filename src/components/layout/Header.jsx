const Header = ({ currentTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-40 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-transparent bg-clip-text">
            Sajal Chandaiya
          </span>
        </div>
        <div className="flex gap-6">
          <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className={`hover:text-${currentTheme.primary} transition-colors`}>
            About
          </button>
          <button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })} className={`hover:text-${currentTheme.primary} transition-colors`}>
            Skills
          </button>
          <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className={`hover:text-${currentTheme.primary} transition-colors`}>
            Projects
          </button>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className={`hover:text-${currentTheme.primary} transition-colors`}>
            Contact
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header 