"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"

const skillCategories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "aiml", label: "AI & ML" },
  { key: "tools", label: "Tools" },
  { key: "cloud", label: "Cloud" },
] as const

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies I work with on a daily basis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-4">{category.label}</h3>
              <ul className="space-y-2">
                {skills[category.key].map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
