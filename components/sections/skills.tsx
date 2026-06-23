"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"

const skillCategories = [
{ key: "frontend", label: "Frontend" },
{ key: "backend", label: "Backend" },
{ key: "database", label: "Database" },
{ key: "aiml", label: "AI & ML" },
{ key: "tools", label: "Tools & Platforms" },
] as const

export function SkillsSection() {
return ( <section id="skills" className="py-16 md:py-20 px-6"> <div className="max-w-5xl mx-auto">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
className="mb-12 text-center"
> <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
Skills & Technologies </h2>

     <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="gradient-text">Technologies</span>  I work with 
          </h2>

      <p className="text-muted-foreground max-w-2xl mx-auto">
        From enterprise backend systems and full-stack applications
        to AI-powered solutions and research projects.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
          }}
          className="
            rounded-xl
            border
            border-border/50
            bg-card
            p-6
            transition-all
            duration-300
            hover:border-primary/40
            hover:shadow-lg
          "
        >
          <h4 className="font-semibold text-lg mb-4">
            {category.label}
          </h4>

          <div className="flex flex-wrap gap-2">
            {skills[category.key].map((skill) => (
              <span
                key={skill}
                className="
                  px-3
                  py-1.5
                  text-sm
                  rounded-full
                  border
                  border-border
                  bg-muted/40
                  hover:bg-primary
                  hover:text-primary-foreground
                  transition-all
                  duration-300
                "
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
