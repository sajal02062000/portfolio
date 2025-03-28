import { motion } from 'framer-motion'
import { ExternalLink, Globe, Smartphone } from 'lucide-react'

const projects = [
  {
    title: "Fasalam",
    description: "A Mobile application for a Farmers for Managing Their Farm, Mini E-commerce and Managing IOT Devices",
    isMobile: true,
    tags: ["Flutter", "Dart", "REST API", "BLE", "QR Code", "GetX", "Get Storage", "USB Serial Communication", "Maps Integration", "Notifications", "Geolocation"],
    url: ["https://play.google.com/store/apps/details?id=com.fasalam.app", "https://apps.apple.com/in/app/fasalam/id6478108954"]
  },
  {
    title: "Bazaar",
    description: "An E-commerce website for Rashail Agro, a company that sells agricultural products and services.",
    isMobile: false,
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Vite", "Geolocation"],
    url: ["https://bazaar.rashailagro.in/",]
  },
  {
    title: "Jankalyanam",
    description: "A company Landing Page for Jankalyanam, a company that sells Medical facilities, services and products.",
    isMobile: false,
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Vite", "Geolocation"],
    url: ["http://jankalyanam.in/",]
  },
  {
    title: "Jankalyanam Mobile App",
    description: "A Mobile application for Jankalyanam, a company that sells Medical facilities, services and products.",
    isMobile: true,
    tags: ["Flutter", "Dart", "REST API", "GetX", "Get Storage", "Notifications", "Geolocation"],
  },
  {
    title: "Raheja Solar Food Processing [Mobile App]",
    description: "A company which is sponsored in Shark Tank India 2025, Developed a Mobile application for their business to manage their IOT Enabled Solar Dryers and manage customers as well as their orders.",
    isMobile: true,
    tags: ["Flutter", "Dart", "REST API", "GetX", "Get Storage", "Notifications", "Geolocation"],
    url: ["https://play.google.com/store/apps/details?id=com.rashailinfotech.app.rsfp&hl=en_IN&pli=1",]
  },
  {
    title: "GoWild-Destiny",
    description: "A Mobile application for GoWild-Destiny, a company that sells Adventure and Travel services and products.",
    isMobile: true,
    tags: ["Flutter", "Dart", "REST API", "GetX", "Get Storage", "Notifications", "Geolocation", "Google Places API", "Street Maps"],
    url: ["https://apps.apple.com/in/app/gowild-destiny/id6477920132", "https://play.google.com/store/apps/details?id=com.destiny.gowild&hl=en_IN"]
  },
  {
    title: "HerbalKalp [E-commerce]",
    description: "Static E-commerce website for HerbalKalp, a company that sells Ayurvedic Medicines and Syrups.",
    isMobile: false,
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    url: ["https://herbalkalp-web.web.app/",]
  },
  {
    title: "Future University Website",
    description: "A static website for Future University, a university that provides various courses and services.",
    isMobile: false,
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    url: ["https://futureuniversity.in/",]
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
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-row gap-2 justify-end">
                    {project.isMobile ? (
                      <div className="flex items-center gap-2 text-gray-400">
                        <Smartphone size={16} />
                      </div>
                    ) : (<div className="flex items-center gap-2 text-gray-400">
                      <Globe size={16} />
                    </div>)}
                    {project.url && project.url.map((url, urlIndex) => (
                      <motion.a
                        key={urlIndex}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-8 h-8 rounded-full bg-${currentTheme.primary}/10 flex items-center justify-center text-${currentTheme.primary} hover:bg-${currentTheme.primary} hover:text-white transition-colors`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 mb-4">
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 