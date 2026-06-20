"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ChevronRight, Sparkles, Code, Layers, Cpu, Monitor, Smartphone } from "lucide-react"
import { projects } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const categories = [
  { id: "all", label: "All Projects", icon: Layers },
  { id: "fullstack", label: "Full Stack", icon: Code },
  { id: "ai-ml", label: "AI/ML", icon: Cpu },
  { id: "hackathon", label: "Hackathon", icon: Sparkles },
  { id: "internship", label: "Internship", icon: Monitor },
]

type Project = (typeof projects)[0]

const categoryColors: Record<string, string> = {
  fullstack: "from-blue-500 to-cyan-500",
  aiml: "from-purple-500 to-pink-500",
  hackathon: "from-orange-500 to-red-500",
  frontend: "from-green-500 to-teal-500",
  desktop: "from-indigo-500 to-purple-500",
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my favorite projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                suppressHydrationWarning
                className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/50"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            )
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden card-hover cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="aspect-video relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[project.category] || "from-primary to-accent"} opacity-80`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white/30">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 bg-white rounded-full text-foreground hover:scale-110 transition-transform"
                        aria-label="View code on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 bg-white rounded-full text-foreground hover:scale-110 transition-transform"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {project.featured && (
                      <span className="px-3 py-1 text-xs font-semibold bg-yellow-500 text-yellow-900 rounded-full flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 text-xs font-medium bg-black/50 text-white backdrop-blur rounded-full">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs font-medium rounded-full">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs font-medium rounded-full">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl">
            {selectedProject && (
              <>
                {/* Project Image */}
                <div className={`aspect-video rounded-xl relative overflow-hidden -mx-6 -mt-6 mb-4 bg-gradient-to-br ${categoryColors[selectedProject.category] || "from-primary to-accent"}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-bold text-white/20">
                      {selectedProject.title.charAt(0)}
                    </span>
                  </div>
                  {selectedProject.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-yellow-500 text-yellow-900 rounded-full flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Featured Project
                      </span>
                    </div>
                  )}
                </div>

                <DialogHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="px-2 py-1 bg-secondary rounded-full text-xs font-medium">{selectedProject.year}</span>
                    <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                    <span className="capitalize">{selectedProject.category}</span>
                  </div>
                  <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                </DialogHeader>

                <DialogDescription className="text-base leading-relaxed text-foreground/80">
                  {selectedProject.description}
                </DialogDescription>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="rounded-full">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border">
                  {selectedProject.github && (
                    <Button variant="outline" asChild className="rounded-full">
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button asChild className="rounded-full">
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
