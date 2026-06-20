"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Code2, Brain, Rocket, Coffee, Database, Globe } from "lucide-react"
import { skills } from "@/lib/data"

const skillIcons = [
  { icon: Code2, label: "Frontend", color: "text-blue-500" },
  { icon: Database, label: "Backend", color: "text-green-500" },
  { icon: Brain, label: "AI & Machine Learning", color: "text-purple-500" },
  { icon: Globe, label: "Tools & Platform", color: "text-orange-500" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a passionate full-stack developer with expertise in modern web technologies. 
            I enjoy building scalable applications and exploring new technologies to solve real-world problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image with skill icons */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main image */}
              <div className="absolute inset-8 rounded-3xl overflow-hidden shadow-2xl border-4 border-card">
                <Image
                  src="/about-image.jpg"
                  alt="Disha working"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              
              {/* Floating skill cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 bg-card shadow-xl rounded-2xl p-4 border border-border"
              >
                <Code2 className="w-8 h-8 text-primary mb-2" />
                <p className="text-xs font-medium">React.js</p>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-0 right-0 bg-card shadow-xl rounded-2xl p-4 border border-border"
              >
                <Database className="w-8 h-8 text-green-500 mb-2" />
                <p className="text-xs font-medium">Node.js</p>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 left-0 bg-card shadow-xl rounded-2xl p-4 border border-border"
              >
                <Brain className="w-8 h-8 text-purple-500 mb-2" />
                <p className="text-xs font-medium">AI/ML</p>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute bottom-0 right-0 bg-card shadow-xl rounded-2xl p-4 border border-border"
              >
                <Rocket className="w-8 h-8 text-orange-500 mb-2" />
                <p className="text-xs font-medium">Next.js</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I&apos;m a <span className="text-primary font-semibold">Computer Engineering</span> student 
                at MIT Academy of Engineering, Pune, passionate about building products that 
                solve real problems.
              </p>
              <p>
                My journey started with curiosity and a love for technology. I specialize in 
                full-stack development with <span className="text-primary font-medium">React</span> and 
                <span className="text-primary font-medium"> Node.js</span>, and I&apos;m deeply interested 
                in AI/ML systems.
              </p>
              <p>
                I believe in writing clean, maintainable code and building scalable applications 
                that make a difference. When I&apos;m not coding, you&apos;ll find me participating 
                in hackathons or exploring new technologies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {skillIcons.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border"
                >
                  <skill.icon className={`w-6 h-6 ${skill.color}`} />
                  <span className="text-sm font-medium">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-3xl p-8 border border-border"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Technologies I Work With</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[...skills.frontend.slice(0, 2), ...skills.backend.slice(0, 2), ...skills.aiml.slice(0, 2)].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center justify-center px-4 py-3 bg-secondary rounded-xl text-sm font-medium border border-border hover:border-primary/50 transition-all cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
