import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = ({ currentTheme, typedText }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ]

  const handleNavClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-40 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className={`bg-gradient-to-r from-${currentTheme.primary} to-${currentTheme.secondary} text-transparent bg-clip-text`}>
            Sajal Chandaiya
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`hover:text-${currentTheme.primary} transition-colors`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left py-2 hover:text-${currentTheme.primary} transition-colors`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.div>
    </header>
  )
}

export default Header 