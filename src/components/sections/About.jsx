import { motion } from 'framer-motion'
import { Code, Coffee, Heart, Sparkles } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const About = ({ currentTheme }) => {
  return (
    <section id="about" className="py-20 relative">
      <Helmet>
        <title>About Me | Sajal Chandaiya Portfolio</title>
        <meta name="description" content="Learn about Sajal Chandaiya, a passionate software developer focused on creating elegant solutions with expertise in modern web technologies." />
        <meta name="keywords" content="Sajal Chandaiya, about me, software developer, web developer, clean code, innovation" />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-transparent bg-clip-text">
              About Me
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-12 leading-relaxed">
            I'm a passionate software developer with a love for creating elegant solutions to complex problems. 
            With expertise in modern web technologies and a keen eye for detail, I strive to build applications 
            that make a difference.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <div className="mb-4">
                <Code className={`w-8 h-8 text-${currentTheme.primary}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Clean Code</h3>
              <p className="text-gray-400">Writing maintainable and efficient code is my priority</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <div className="mb-4">
                <Sparkles className={`w-8 h-8 text-${currentTheme.primary}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Innovation</h3>
              <p className="text-gray-400">Always exploring new technologies and creative solutions</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <div className="mb-4">
                <Coffee className={`w-8 h-8 text-${currentTheme.primary}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Dedication</h3>
              <p className="text-gray-400">Committed to delivering high-quality results</p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <div className="mb-4">
                <Heart className={`w-8 h-8 text-${currentTheme.primary}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Passion</h3>
              <p className="text-gray-400">Love what I do and do what I love</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 