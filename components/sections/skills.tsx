"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"

const skillCategories = [
{ key: "frontend", label: "Frontend" },
{ key: "backend", label: "Backend" },
{ key: "database", label: "Database" },
{ key: "aiml", label: "AI & ML" },
{ key: "tools", label: "Tools" },
] as const

export function SkillsSection() {
return ( <section id="skills" className="py-24 px-6 bg-muted/30"> <div className="max-w-5xl mx-auto">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
className="mb-12 text-center"
> <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
Tech Stack </h2>


      <h3 className="text-3xl font-bold mb-4">
        Technologies I Work With
      </h3>

      <p className="text-lg text-muted-foreground">
        Tools, frameworks, and technologies I use to build scalable and impactful applications.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          className="rounded-2xl border bg-background p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-semibold mb-4">
            {category.label}
          </h3>

          <div className="flex flex-wrap gap-2">
            {skills[category.key].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


)
}
