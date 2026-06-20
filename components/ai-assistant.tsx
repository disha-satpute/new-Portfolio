"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Sparkles, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

// Suggested prompts for recruiters
const suggestedPrompts = [
  "Tell me about Disha",
  "What projects has she built?",
  "What technologies is she strongest in?",
  "Why should we hire her?",
  "What's her experience?",
]

// Pre-defined responses based on portfolio data
// In production, replace with OpenAI API integration
const getResponse = (query: string): string => {
  const q = query.toLowerCase()

  if (q.includes("about") || q.includes("tell me") || q.includes("who")) {
    return "Disha Satpute is a Computer Engineering student at MIT Academy of Engineering, Pune. She's a Full-Stack Developer with expertise in React, Node.js, and AI/ML. She's passionate about building scalable applications and has experience with multiple internships in software development and data science."
  }

  if (q.includes("project")) {
    return "Disha has built several notable projects:\n\n• ScholarHub - A scholarship discovery platform with JWT auth and real-time chat\n• MediVault - Blockchain + AI healthcare system (Hackathon project)\n• AI Sentiment Analyzer - ML-based text classification tool\n• Grievance Management System - Full-stack complaint tracking\n\nEach project demonstrates strong technical skills and problem-solving abilities."
  }

  if (q.includes("technolog") || q.includes("stack") || q.includes("skill") || q.includes("strongest")) {
    return "Disha's core strengths include:\n\n• Frontend: React.js, Next.js, TypeScript, Tailwind CSS\n• Backend: Node.js, Express.js, RESTful APIs\n• Database: PostgreSQL, MongoDB, Oracle SQL\n• AI/ML: Python, Scikit-learn, Deep Learning, NLP\n• Tools: Git, Postman, VS Code, Tableau\n\nShe's particularly strong in full-stack development and ML systems."
  }

  if (q.includes("hire") || q.includes("why")) {
    return "Here's why Disha stands out:\n\n• Strong technical foundation with hands-on internship experience\n• Published research paper on Grievance Redressal Systems\n• AFE Scholar 2024 (Amazon Future Engineer)\n• Experience building production-grade applications\n• Currently pursuing B.Tech with excellent academic record\n• Open to internships and product engineering roles"
  }

  if (q.includes("experience") || q.includes("work") || q.includes("intern")) {
    return "Disha's professional experience includes:\n\n• Software Development Intern at TechCorp Solutions (2025) - Building AI-powered web apps\n• Data Science Intern at DataMinds Analytics (2024) - ML models & data pipelines\n• Full-Stack Intern at OmegaSoft Technologies (2023) - MERN stack development\n\nShe also has strong academic credentials with a 91.75% in her Diploma."
  }

  if (q.includes("contact") || q.includes("reach") || q.includes("email")) {
    return "You can reach Disha at:\n\n• Email: dishasatpute44@gmail.com\n• Location: Pune, Maharashtra, India\n• LinkedIn: linkedin.com/in/dishasatpute\n• GitHub: github.com/dishasatpute\n\nShe's currently open to internship opportunities!"
  }

  return "I can help you learn about Disha's skills, projects, experience, and why she'd be a great addition to your team. Try asking about her technical stack, projects, or professional experience!"
}

type Message = {
  id: number
  role: "user" | "assistant"
  content: string
}

export function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "assistant",
      content:
        "Hi! I'm Disha's AI assistant. I can answer questions about her skills, projects, and experience. What would you like to know?",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: messages.length,
      role: "user",
      content: text,
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    /*
     * TODO: Replace with OpenAI API integration
     * Architecture notes for future implementation:
     * 
     * 1. Create API route: /api/chat
     * 2. Use OpenAI API with system prompt containing portfolio context
     * 3. Consider using RAG with:
     *    - Pinecone/Supabase vector DB for embeddings
     *    - Resume PDF parsing for context
     *    - Project metadata retrieval
     * 4. Example implementation:
     *    const response = await openai.chat.completions.create({
     *      model: "gpt-4",
     *      messages: [
     *        { role: "system", content: portfolioContext },
     *        ...conversationHistory,
     *        { role: "user", content: text }
     *      ]
     *    })
     */

    const response = getResponse(text)

    const assistantMessage: Message = {
      id: messages.length + 1,
      role: "assistant",
      content: response,
    }
    setMessages((prev) => [...prev, assistantMessage])
    setIsTyping(false)
  }

  const handlePromptClick = (prompt: string) => {
    handleSend(prompt)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setIsOpen(true)}
        suppressHydrationWarning
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 bg-foreground text-background rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform ${
          isOpen ? "hidden" : ""
        }`}
        aria-label="Open AI Assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-120px)] bg-background border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">AI Assistant</p>
                  <p className="text-xs text-muted-foreground">Ask about Disha</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea ref={scrollRef} className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="w-6 h-6 bg-accent/20 rounded-full flex-shrink-0 flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-accent" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-3 py-2 rounded-lg text-sm whitespace-pre-wrap ${
                        message.role === "user"
                          ? "bg-foreground text-background"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      {message.content}
                    </div>
                    {message.role === "user" && (
                      <div className="w-6 h-6 bg-muted rounded-full flex-shrink-0 flex items-center justify-center">
                        <User className="w-3 h-3 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex-shrink-0 flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-accent" />
                    </div>
                    <div className="bg-muted px-3 py-2 rounded-lg">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0.1s]" />
                        <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Suggested Prompts */}
              {messages.length === 1 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {suggestedPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handlePromptClick(prompt)}
                      suppressHydrationWarning
                      className="px-3 py-1.5 text-xs bg-muted text-muted-foreground hover:text-foreground rounded-full transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend(input)
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about skills, projects..."
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={!input.trim() || isTyping}>
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
