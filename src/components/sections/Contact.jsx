import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = ({ currentTheme }) => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-transparent bg-clip-text">
              Get in Touch
            </span>
          </h2>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8 max-w-xl w-full"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <Mail className={`w-6 h-6 text-${currentTheme.primary}`} />
                    <a href="mailto:guptasajal0206@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                      guptasajal0206@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <Phone className={`w-6 h-6 text-${currentTheme.primary}`} />
                    <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <MapPin className={`w-6 h-6 text-${currentTheme.primary}`} />
                    <span className="text-gray-300">Indore, India</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-6 text-center">Social Links</h3>
                <div className="flex justify-center gap-4">
                  <motion.a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-${currentTheme.primary}/10 flex items-center justify-center text-${currentTheme.primary} hover:bg-${currentTheme.primary} hover:text-white transition-colors`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-${currentTheme.primary}/10 flex items-center justify-center text-${currentTheme.primary} hover:bg-${currentTheme.primary} hover:text-white transition-colors`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={24} />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-${currentTheme.primary}/10 flex items-center justify-center text-${currentTheme.primary} hover:bg-${currentTheme.primary} hover:text-white transition-colors`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Twitter size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 