"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Send, Sparkles, User, Bot, Loader2, X, Briefcase, GraduationCap, Code, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { siteConfig, skills, experience, projects, achievements } from "@/lib/data"

interface Message {
  role: "user" | "assistant"
  content: string
}

const suggestedQuestions = [
  { text: "Is Disha a good fit for a Full-Stack role?", icon: Briefcase },
  { text: "What are Disha's technical skills?", icon: Code },
  { text: "Tell me about Disha's education", icon: GraduationCap },
  { text: "What projects has Disha worked on?", icon: Award },
]

// Knowledge base responses
function generateResponse(query: string): string {
  const q = query.toLowerCase()
  
  // Role fit questions
  if (q.includes("fit") || q.includes("suitable") || q.includes("good for") || q.includes("right candidate") || q.includes("hire")) {
    if (q.includes("full-stack") || q.includes("fullstack") || q.includes("full stack")) {
      return `Yes, Disha is an excellent fit for a Full-Stack Developer role!

**Relevant Experience:**
- Software Development Intern with experience in React, Python, and ML
- Full-Stack Development Intern at OmegaSoft Technologies (MERN Stack)
- Built 10+ projects including ScholarHub (React, Node.js, PostgreSQL)

**Technical Skills:**
- Frontend: React.js, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Express.js, RESTful APIs
- Database: PostgreSQL, MongoDB, MySQL

**Education:**
- B.Tech in Computer Engineering at MIT Academy of Engineering (Current)
- Strong foundation in software engineering and DSA

She combines practical experience with academic knowledge, making her well-suited for full-stack development roles.`
    }
    
    if (q.includes("frontend") || q.includes("front-end") || q.includes("front end") || q.includes("react")) {
      return `Disha is highly suitable for a Frontend Developer role!

**Frontend Expertise:**
- Strong proficiency in React.js, Next.js, and TypeScript
- Experience with modern CSS (Tailwind CSS, CSS3)
- Built responsive, user-friendly interfaces

**Notable Frontend Projects:**
- ScholarHub: Complex filtering UI with real-time updates
- Dance Academy Website: Focus on modern UI/UX with animations
- Multiple React-based applications with state management

**Strengths:**
- Clean, maintainable code practices
- Mobile-first responsive design approach
- Experience with modern frontend tooling

Perfect fit for teams building modern web applications!`
    }
    
    if (q.includes("backend") || q.includes("back-end") || q.includes("back end")) {
      return `Disha has solid backend development skills!

**Backend Experience:**
- Node.js, Express.js for building RESTful APIs
- Database design with PostgreSQL, MongoDB, MySQL
- Authentication systems (JWT, session management)

**Projects Demonstrating Backend Skills:**
- ScholarHub: Full backend with JWT auth, real-time chat, PostgreSQL
- Grievance Management System: PHP/MySQL backend
- Medical Store Stock Management: Java, Oracle SQL

**Additional Skills:**
- API design and integration
- Database optimization and PL/SQL
- Java Servlets and JSP

She can handle both API development and database management effectively.`
    }
    
    if (q.includes("ai") || q.includes("ml") || q.includes("machine learning") || q.includes("data")) {
      return `Disha has growing expertise in AI/ML!

**AI/ML Skills:**
- Python, Scikit-learn, Deep Learning
- NLP for text analysis
- Pandas, NumPy for data processing

**AI/ML Projects:**
- AI Sentiment Analyzer: Text classification using ML
- MediVault: AI-powered healthcare insights
- Published research on system development

**Learning Path:**
- Currently deepening knowledge in System Design and Advanced ML
- Active participant in AI-focused hackathons

Great candidate for junior AI/ML roles or hybrid full-stack + AI positions!`
    }
    
    if (q.includes("intern") || q.includes("internship") || q.includes("entry") || q.includes("junior")) {
      return `Disha is an ideal candidate for internship/entry-level positions!

**Why She Stands Out:**
1. **Practical Experience**: Multiple internships in software development
2. **Diverse Projects**: 10+ projects spanning web dev, AI/ML, mobile
3. **Academic Excellence**: B.Tech student at MIT AOE with strong fundamentals
4. **Recognition**: AFE Scholar 2024, NMMS Scholarship holder

**Strengths for Entry-Level Roles:**
- Quick learner with enthusiasm for new technologies
- Hackathon experience shows problem-solving under pressure
- Published research demonstrates analytical abilities
- Strong communication and collaboration skills

She brings the perfect mix of academic knowledge and practical experience!`
    }
    
    return `Disha is a versatile developer who can adapt to various roles!

**Overall Profile:**
- Full-Stack Developer with AI/ML interests
- Computer Engineering student at MIT AOE
- Multiple internship experiences
- 10+ diverse projects completed

**Key Strengths:**
- Strong technical foundation (Frontend + Backend + AI/ML)
- Proven track record with real-world projects
- Quick learner and team player
- Recognition through awards and scholarships

To give you a more specific assessment, could you tell me which role you're considering her for?`
  }
  
  // Skills questions
  if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("know") || q.includes("proficient")) {
    return `**Disha's Technical Skills:**

**Frontend:**
${skills.frontend.join(", ")}

**Backend:**
${skills.backend.join(", ")}

**Database:**
${skills.database.join(", ")}

**AI/ML:**
${skills.aiml.join(", ")}

**Tools & Platforms:**
${skills.tools.join(", ")}

**Cloud & Deployment:**
${skills.cloud.join(", ")}

She's most proficient in the MERN stack and Python for ML applications!`
  }
  
  // Education questions
  if (q.includes("education") || q.includes("study") || q.includes("college") || q.includes("degree") || q.includes("university") || q.includes("school")) {
    return `**Disha's Educational Background:**

**Current:**
B.Tech in Computer Engineering
MIT Academy of Engineering, Pune
(2024 - 2027)
- Focus: Software Engineering, DSA, Deep Learning, DBMS

**Previous:**
Diploma in Information Technology
Government Polytechnic Awsari(Kh)
(2021 - 2024)
- Graduated with 91.75%
- Strong foundation in programming and IT fundamentals

**Academic Achievements:**
- AFE Scholar 2024 (Amazon Future Engineer)
- NMMS Scholarship holder
- Published research paper on Grievance Redressal System`
  }
  
  // Project questions
  if (q.includes("project") || q.includes("built") || q.includes("created") || q.includes("developed") || q.includes("portfolio")) {
    const featuredProjects = projects.filter(p => p.featured)
    return `**Disha's Notable Projects:**

${featuredProjects.map(p => `**${p.title}** (${p.year})
${p.description}
Tech: ${p.technologies.join(", ")}`).join("\n\n")}

**Other Projects Include:**
${projects.filter(p => !p.featured).map(p => `- ${p.title}: ${p.technologies.slice(0, 3).join(", ")}`).join("\n")}

She has experience across web development, AI/ML, and desktop applications!`
  }
  
  // Experience questions
  if (q.includes("experience") || q.includes("work") || q.includes("intern") || q.includes("job") || q.includes("career")) {
    const workExp = experience.filter(e => e.type === "work")
    return `**Disha's Work Experience:**

${workExp.map(e => `**${e.role}** at ${e.company}
${e.duration} | ${e.location}
${e.description}
Skills: ${e.technologies.join(", ")}`).join("\n\n")}

She has hands-on experience in software development, data science, and full-stack engineering roles.`
  }
  
  // Achievement questions
  if (q.includes("achievement") || q.includes("award") || q.includes("recognition") || q.includes("honor") || q.includes("accomplish")) {
    return `**Disha's Achievements & Recognition:**

**Awards:**
- AFE Scholar 2024 - Recognized for technical excellence by Amazon Future Engineer (Zuvy.org)
- NMMS Scholarship - National Means-cum-Merit Scholarship for academic achievement

**Research:**
- Published paper on "Grievance Redressal System" - developing efficient organizational communication systems

**Academic:**
- 91.75% in Diploma in Information Technology
- Currently pursuing B.Tech at prestigious MIT AOE

**Hackathons:**
- Built MediVault - blockchain + AI healthcare solution at hackathon`
  }
  
  // Contact questions
  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("hire") || q.includes("connect")) {
    return `**How to Connect with Disha:**

**Email:** ${siteConfig.email}

**Social Profiles:**
- GitHub: ${siteConfig.social.github}
- LinkedIn: ${siteConfig.social.linkedin}

**Location:** ${siteConfig.location}

**Current Status:** ${siteConfig.availability}

Feel free to reach out for collaboration or opportunities!`
  }
  
  // About/Introduction questions
  if (q.includes("who") || q.includes("about") || q.includes("tell me") || q.includes("introduce") || q.includes("disha")) {
    return `**About Disha Satpute:**

${siteConfig.description}

**Current Focus:**
- ${siteConfig.title}
- Building AI-powered applications
- Contributing to open-source projects

**Quick Facts:**
- 10+ Projects completed
- 2+ Hackathons participated
- Published research paper
- AFE Scholar 2024

**Currently Learning:**
- System Design
- Distributed Systems
- Advanced ML/AI

She's passionate about technology and always eager to learn and build!`
  }
  
  // Availability questions
  if (q.includes("available") || q.includes("open") || q.includes("looking") || q.includes("opportunity")) {
    return `**Disha's Availability:**

${siteConfig.availability}

**Open To:**
- Software Development Internships
- Full-Stack Developer roles
- AI/ML Engineering positions
- Product Engineering opportunities
- Collaborative projects

**Preferred:**
- Remote or Pune-based opportunities
- Roles involving React, Node.js, or Python
- Positions with learning and growth opportunities

**Contact:** ${siteConfig.email}`
  }
  
  // Default response
  return `I can help you learn about Disha! Here are some things you can ask:

- **Role Fit**: "Is Disha a good fit for a [role]?"
- **Skills**: "What are Disha's technical skills?"
- **Projects**: "What projects has Disha built?"
- **Experience**: "Tell me about Disha's work experience"
- **Education**: "What's Disha's educational background?"
- **Achievements**: "What awards has Disha received?"
- **Contact**: "How can I reach Disha?"

Feel free to ask anything specific about her background!`
}

export function AskDishaAgent() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return

    const userMessage: Message = { role: "user", content: text.trim() }
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI thinking delay
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700))

    const response = generateResponse(text)
    setMessages(prev => [...prev, { role: "assistant", content: response }])
    setIsTyping(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <section id="ask-disha" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ask Anything About <span className="gradient-text">Disha</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Curious if Disha is the right fit for your team? Ask our AI assistant about her skills, 
            experience, projects, or anything else you&apos;d like to know.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Chat Container */}
          <div className="bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-6 text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Disha&apos;s AI Assistant</h3>
                  <p className="text-sm opacity-90">Ask me anything about Disha&apos;s background</p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-[400px] overflow-y-auto p-6 space-y-4 bg-secondary/30">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <MessageSquare className="w-12 h-12 text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground mb-6">
                    Start a conversation! Ask about Disha&apos;s skills, experience, or if she&apos;s a good fit for a role.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
                    {suggestedQuestions.map((q, i) => (
                      <motion.button
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i }}
                        onClick={() => handleSend(q.text)}
                        suppressHydrationWarning
                        className="flex items-center gap-2 p-3 bg-card rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-left group"
                      >
                        <q.icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{q.text}</span>
                        <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                      </motion.button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.role === "assistant" && (
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-primary-foreground" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-card border border-border"
                        }`}
                      >
                        <div className="text-sm whitespace-pre-wrap prose prose-sm dark:prose-invert max-w-none">
                          {message.content.split("\n").map((line, i) => {
                            if (line.startsWith("**") && line.endsWith("**")) {
                              return <p key={i} className="font-bold mt-2 first:mt-0">{line.replace(/\*\*/g, "")}</p>
                            }
                            if (line.startsWith("- ")) {
                              return <p key={i} className="ml-2">{line}</p>
                            }
                            return <p key={i}>{line}</p>
                          })}
                        </div>
                      </div>
                      {message.role === "user" && (
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <Bot className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="bg-card border border-border rounded-2xl px-4 py-3">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-card">
              <div className="flex gap-3">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about skills, experience, role fit..."
                  className="flex-1 rounded-full bg-secondary border-0 px-5"
                  disabled={isTyping}
                />
                <Button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  className="rounded-full w-12 h-12 p-0 bg-primary hover:bg-primary/90"
                >
                  {isTyping ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </Button>
              </div>
              {messages.length > 0 && (
                <div className="flex justify-center mt-3">
                  <button
                    onClick={() => setMessages([])}
                    suppressHydrationWarning
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Clear conversation
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
