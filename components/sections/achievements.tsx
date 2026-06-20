"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Trophy, GraduationCap, ExternalLink, FileText, Sparkles, Rocket, BookMarked } from "lucide-react"
import { Button } from "@/components/ui/button"

const recognitions = [
  {
    title: "AFE Scholar 2024",
    organization: "Amazon Future Engineer - Zuvy.org",
    description: "Awarded for demonstrating exceptional technical excellence and passion for technology",
    icon: Award,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "NMMS Scholarship",
    organization: "National Means-cum-Merit Scholarship",
    description: "Selected for national scholarship recognizing academic merit and potential",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
  },
]

const research = {
  title: "Grievance Redressal System",
  description: "Published research paper on developing an efficient grievance redressal system for improving organizational communication and problem resolution. The paper explores innovative approaches to streamline complaint handling processes.",
  journal: "Research Publication",
  year: "2024",
  certificateUrl: "https://drive.google.com/file/d/1Z43St2-gcZXxCAepG7cmmwlWauEGozaO/view?usp=sharing",
  paperUrl: "https://drive.google.com/file/d/1sljMjIFFbxn4-_emcQxpewjXzmBwWHWn/view?usp=sharing",
}

const researchPapers = {
  title: "Research Papers (Under Review)",
  organization: "MIT Academy of Engineering",
  year: "2026",
  description:
    "Authored three research papers in the domains of Artificial Intelligence, Healthcare Systems, and Environmental Analytics, covering Air Quality Forecasting with Agentic AI, Multimodal Autism Prediction using Deep Learning, and a Role-Based Hospital Management System.",
}

const underReviewPapers = [
  {
    title: "Data-Driven Urban Air Quality Forecasting with Chatbot Assistance",
    status: "Under Review",
    paperUrl: "https://drive.google.com/file/d/13HdSp308WAWTeMKHCtMBm90WVLYDTBM6/view?usp=sharing",
    note:
      "Proposed an intelligent air quality forecasting framework combining Variational Autoencoders (VAE), BiLSTM with Self-Attention, predictive analytics, and Agentic AI for multi-horizon AQI prediction and environmental decision support.",
  },
  {
    title: "Autism Spectrum Disorder Prediction Using Multimodal System",
    status: "Under Review",
    paperUrl: "https://drive.google.com/file/d/1hiykLmy6JyD0x6Sq_1-x94Bjf-2FeXkH/view?usp=sharing",
    note:
      "Developed a multimodal deep learning framework integrating CNN, Residual CNN, and LSTM architectures for autism prediction using facial images, behavioral patterns, and questionnaire-based data.",
  },
  {
    title: "Hospital Management System: A Comprehensive Role-Based Digital Platform for Modern Healthcare Operations",
    status: "Under Review",
    paperUrl: "https://drive.google.com/file/d/1y1oagm9hx7ckwDEe0rgQ3CgCUS3VT3MC/view?usp=sharing",
    note:
      "Designed a full-stack healthcare management platform featuring role-based access control, appointment automation, digital prescriptions, online pharmacy services, and an innovative Pharmacy Community Network.",
  },
]

const currentActivity = {
  building: [
    { text: "AI-powered personal productivity assistant", status: "In Progress" },
    { text: "Open-source contribution tracker", status: "Planning" },
  ],
  learning: [
    "System Design",
    "Distributed Systems", 
    "Advanced ML/AI",
  ],
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-6 bg-muted/30 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Awards & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for academic excellence, technical achievements, and contributions to the field.
          </p>
        </motion.div>

        {/* Recognition Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {recognitions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden card-hover"
            >
              {/* Gradient top border */}
              <div className={`h-1.5 bg-gradient-to-r ${item.color}`} />
              
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{item.organization}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              Published <span className="gradient-text">Research</span>
            </h3>
            <p className="text-muted-foreground">Contributing to academic knowledge through research publications</p>
          </div>

          <div className="bg-card rounded-3xl border border-border overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Research Image/Icon Section */}
              <div className="md:col-span-2 bg-gradient-to-br from-purple-500 to-pink-500 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-90" />
                  <p className="text-sm font-medium opacity-80">Research Paper</p>
                  <p className="text-2xl font-bold">{research.year}</p>
                </div>
              </div>

              {/* Research Content */}
              <div className="md:col-span-3 p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 text-xs font-semibold bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                    {research.journal}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{research.title}</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">{research.description}</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" className="rounded-full" asChild>
                    <a href={research.certificateUrl} target="_blank" rel="noopener noreferrer" aria-label="View research certificate">
                      <FileText className="w-4 h-4 mr-2" />
                      View Certificate
                    </a>
                  </Button>
                  <Button size="sm" className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0" asChild>
                    <a href={research.paperUrl} target="_blank" rel="noopener noreferrer" aria-label="Read research paper">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Paper
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Research Papers Under Review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              {researchPapers.title}
            </h3>
            <p className="text-muted-foreground">
              {researchPapers.organization} · {researchPapers.year}
            </p>
          </div>

          <div className="bg-card rounded-3xl border border-border p-6 md:p-8 card-hover">
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mb-6">
              {researchPapers.description}
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {underReviewPapers.map((paper, index) => (
                <motion.div
                  key={paper.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl border border-border/70 bg-secondary/30 p-4 card-hover"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-semibold text-foreground text-sm leading-snug">{paper.title}</h4>
                    <span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                      {paper.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{paper.note}</p>
                  {paper.paperUrl ? (
                    <Button variant="outline" size="sm" className="h-8 rounded-full text-xs" asChild>
                      <a href={paper.paperUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 mr-2" />
                        View Paper
                      </a>
                    </Button>
                  ) : (
                    <span className="text-xs text-muted-foreground">Paper link can be added when available.</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Current Activity Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              What I&apos;m <span className="gradient-text">Up To</span>
            </h3>
            <p className="text-muted-foreground">Currently building and learning</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Currently Building */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-green-500" />
                </div>
                <h4 className="text-lg font-semibold">Currently Building</h4>
              </div>
              <div className="space-y-4">
                {currentActivity.building.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-sm">{item.text}</span>
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      item.status === "In Progress" 
                        ? "bg-green-500/10 text-green-600 dark:text-green-400" 
                        : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <BookMarked className="w-5 h-5 text-purple-500" />
                </div>
                <h4 className="text-lg font-semibold">Currently Learning</h4>
              </div>
              <div className="space-y-3">
                {currentActivity.learning.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
