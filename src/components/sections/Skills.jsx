import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "Web Development",
    skills: [
      { name: "React", level: 60 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 85 },
      { name: "Tailwind CSS", level: 65 },
      { name: "Push Notifications", level: 65 },
    ]
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 90 },
      { name: "Material UI", level: 85 },
      { name: "Cupertino UI", level: 85 },
      { name: "GetX", level: 90 },
      { name: "Firebase", level: 85 },
      { name: "Push Notifications", level: 85 },
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Android Studio", level: 85 },
      { name: "Xcode", level: 75 },
      { name: "Figma", level: 55 },
      { name: "Postman", level: 95 },
      { name: "Photoshop", level: 45 },
      { name: "Canva", level: 40 },
      { name: "Adobe Dreamweaver", level: 45 },
      { name: "Git", level: 75 },
      { name: "Docker", level: 45 },
      { name: "AWS", level: 60 },
      { name: "Digital Ocean", level: 60 },
      { name: "CI/CD", level: 35 },
    ]
  }
]

const Skills = ({ currentTheme }) => {
  return (
    <section id="skills" className="py-20 relative">
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
              Skills & Expertise
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 self-center">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
              >
                <h3 className="text-2xl font-semibold mb-6 text-white text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className={`text-${currentTheme.primary}`}>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full bg-${currentTheme.primary} rounded-full`}
                        />
                      </div>
                    </div>
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

export default Skills 