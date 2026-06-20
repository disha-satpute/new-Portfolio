"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, ArrowDown, FileText, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig, stats } from "@/lib/data"

const roles = ["Full-Stack Developer", "AI/ML Engineer", "Problem Solver", "Tech Enthusiast"]

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-2 text-balance"
            >
              Hi, I&apos;m <span className="gradient-text">{siteConfig.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mb-6 h-10"
            >
              <TypeWriter texts={roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8"
            >
              Passionate about building innovative web applications with lightweight, modern technologies. 
              I transform ideas into elegant, functional solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 rounded-full px-8">
                <Link href="#projects">
                  <Sparkles className="w-4 h-4 mr-2" />
                  View My Work
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full px-8 border-2">
                <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 shadow-md hover:shadow-lg border border-border"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 shadow-md hover:shadow-lg border border-border"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 shadow-md hover:shadow-lg border border-border"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin-slow opacity-75 blur-sm" style={{ padding: '3px' }} />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <Image
                  src="/profile.jpg"
                  alt="Disha Satpute"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-card shadow-lg rounded-2xl px-4 py-2 border border-border"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <p className="text-xs font-semibold">MIT AOE</p>
                    <p className="text-xs text-muted-foreground">Pune</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-card shadow-lg rounded-2xl px-4 py-2 border border-border"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💻</span>
                  <div>
                    <p className="text-xs font-semibold">10+ Projects</p>
                    <p className="text-xs text-muted-foreground">Completed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-center card-hover"
            >
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-3xl sm:text-4xl font-bold gradient-text mb-1"
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}

// TypeWriter Component
function TypeWriter({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [currentText, setCurrentText] = React.useState("")
  const [isDeleting, setIsDeleting] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentIndex]
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        
        if (currentText === "") {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <span>
      I&apos;m a {currentText}
      <span className="cursor-blink text-primary">|</span>
    </span>
  )
}

import React from "react"
