import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { themes } from './utils/themes'
import myImage from './assets/photo.png'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import SEO from './components/SEO'
import {
  Download,
  MessageCircle
} from 'lucide-react'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'default'
  })
  const [typedText, setTypedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const fullText = 'Sajal Chandaiya'
  const typingSpeed = 150
  const erasingSpeed = 100
  const delayBeforeErasing = 2000
  const delayBeforeTyping = 1000
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    let timeout;

    const typeText = () => {
      if (isTyping && !isDeleting) {
        if (typedText.length < fullText.length) {
          setTypedText(fullText.slice(0, typedText.length + 1))
          timeout = setTimeout(typeText, typingSpeed)
        } else {
          timeout = setTimeout(() => setIsDeleting(true), delayBeforeErasing)
        }
      } else if (isDeleting) {
        if (typedText.length > 0) {
          setTypedText(fullText.slice(0, typedText.length - 1))
          timeout = setTimeout(typeText, erasingSpeed)
        } else {
          setIsDeleting(false)
          timeout = setTimeout(() => setIsTyping(true), delayBeforeTyping)
        }
      }
    }

    timeout = setTimeout(typeText, typingSpeed)

    return () => clearTimeout(timeout)
  }, [typedText, isTyping, isDeleting])

  useEffect(() => {
    // Set CSS variables for the current theme
    document.documentElement.style.setProperty('--primary-color', `var(--${themes[theme].primary})`);
    document.documentElement.style.setProperty('--secondary-color', `var(--${themes[theme].secondary})`);
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const currentTheme = themes[theme]

  return (
    <div className={`min-h-screen bg-${currentTheme.background} relative overflow-hidden`}>
      <SEO />
      
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-${currentTheme.primary} opacity-10 rounded-full blur-3xl`}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-${currentTheme.secondary} opacity-10 rounded-full blur-3xl`}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            rotate: [360, 180, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className={`absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-${currentTheme.accent} opacity-10 rounded-full blur-3xl`}
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
            scale: [1, 1.5, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Theme Switcher */}
      <div className="fixed top-20 right-4 z-50 flex flex-col gap-2 bg-gray-800/50 p-2 rounded-lg backdrop-blur-sm">
        {Object.keys(themes).map((themeName) => (
          <button
            key={themeName}
            onClick={() => handleThemeChange(themeName)}
            className={`w-8 h-8 rounded-lg transition-all duration-300 ${theme === themeName
                ? `bg-${themes[themeName].primary} ring-2 ring-white`
                : `bg-${themes[themeName].primary}/50 hover:bg-${themes[themeName].primary}`
              }`}
            title={themeName.charAt(0).toUpperCase() + themeName.slice(1)}
          />
        ))}
      </div>

      {/* Header */}
      <Header currentTheme={currentTheme} typedText={typedText} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="flex items-center justify-center relative overflow-hidden pt-16 pb-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 text-center z-10 flex flex-col md:flex-row items-center justify-center gap-12"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={myImage} alt="Sajal Chandaiya" className="w-full h-full object-cover" />
              </motion.div>
              {/* Animated ring */}
              <motion.div
                className={`absolute inset-0 border-2 border-${currentTheme.primary} rounded-full`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center md:items-start"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-transparent bg-clip-text">
                  {typedText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block ml-1"
                >
                  |
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-gray-300 mb-8"
              >
                Experienced Software Developer
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col md:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="/src/assets/resume/Sajal Chandaiya Resume.pdf"
                  target="_blank"
                  className={`px-6 py-3 bg-${currentTheme.primary} text-white rounded-lg flex items-center gap-2`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Download Resume
                </motion.a>
                <motion.button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className={`px-6 py-3 border border-${currentTheme.primary} text-${currentTheme.primary} rounded-lg flex items-center gap-2`}
                  whileHover={{ scale: 1.05, backgroundColor: `rgba(${parseInt(currentTheme.primary.split('-')[1])}, 0.1)` }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={20} />
                  Contact Me
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Other Sections */}
        <About currentTheme={currentTheme} />
        <Skills currentTheme={currentTheme} />
        <Projects currentTheme={currentTheme} />
        <Contact currentTheme={currentTheme} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
