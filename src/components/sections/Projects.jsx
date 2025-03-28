import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Project 1",
    description: "A full-stack web application built with React, Node.js, and MongoDB. Features include user authentication, real-time updates, and responsive design.",
    image: "/project1.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/yourusername/project1",
    liveLink: "https://project1.com"
  },
  {
    title: "Project 2",
    description: "An e-commerce platform with advanced filtering, shopping cart functionality, and secure payment integration using Stripe.",
    image: "/project2.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    githubLink: "https://github.com/yourusername/project2",
    liveLink: "https://project2.com"
  },
  {
    title: "Project 3",
    description: "A real-time chat application with features like group messaging, file sharing, and end-to-end encryption.",
    image: "/project3.jpg",
    tags: ["React", "Socket.io", "Node.js", "PostgreSQL"],
    githubLink: "https://github.com/yourusername/project3",
    liveLink: "https://project3.com"
  }
]

const Projects = ({ currentTheme }) => {
  return (
    <section id="projects" className="py-20 relative">
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
              Featured Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden"
              >
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="flex gap-4">
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-sm rounded-full bg-${currentTheme.primary}/10 text-${currentTheme.primary}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 