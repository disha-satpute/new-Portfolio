"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, MapPin, Calendar, ChevronRight } from "lucide-react"
import { experience } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  const workExperience = experience.filter(e => e.type === "work")
  const education = experience.filter(e => e.type === "education")

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
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
            Career <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my educational background, internships, and professional growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Work Experience</h3>
                <p className="text-sm text-muted-foreground">Professional journey</p>
              </div>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              <div className="space-y-6">
                {workExperience.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/25" />

                    <div className="bg-card border border-border rounded-2xl p-6 card-hover group">
                      <div className="flex items-center gap-2 text-xs text-primary font-medium mb-2">
                        <Calendar className="w-3 h-3" />
                        {item.duration}
                      </div>

                      <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {item.role}
                      </h4>
                      <p className="text-primary font-medium text-sm mb-2">{item.company}</p>
                      
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs font-medium rounded-full">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Education</h3>
                <p className="text-sm text-muted-foreground">Academic background</p>
              </div>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />

              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg shadow-accent/25" />

                    <div className="bg-card border border-border rounded-2xl p-6 card-hover group">
                      <div className="flex items-center gap-2 text-xs text-accent font-medium mb-2">
                        <Calendar className="w-3 h-3" />
                        {item.duration}
                      </div>

                      <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                        {item.role}
                      </h4>
                      <p className="text-accent font-medium text-sm mb-2">{item.company}</p>
                      
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs font-medium rounded-full">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
