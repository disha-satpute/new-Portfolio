"use client"

import { useEffect, useState, useCallback } from "react"
import { Command } from "cmdk"
import { motion, AnimatePresence } from "framer-motion"
import { Search, User, Briefcase, FolderGit2, Mail, FileText, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { siteConfig, projects } from "@/lib/data"

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // Toggle with Cmd+K / Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      {/* Trigger hint */}
      <button
        onClick={() => setOpen(true)}
        suppressHydrationWarning
        className="hidden md:flex fixed top-4 right-24 z-40 items-center gap-2 px-3 py-1.5 text-xs text-muted-foreground bg-muted/50 border border-border rounded-md hover:bg-muted transition-colors"
      >
        <Search className="w-3 h-3" />
        <span>Search</span>
        <kbd className="ml-2 px-1.5 py-0.5 text-[10px] bg-background border border-border rounded">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Command Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -20 }}
              className="absolute left-1/2 top-[20%] -translate-x-1/2 w-full max-w-lg"
            >
              <Command className="bg-popover border border-border rounded-xl shadow-2xl overflow-hidden">
                <div className="flex items-center px-4 border-b border-border">
                  <Search className="w-4 h-4 text-muted-foreground mr-2" />
                  <Command.Input
                    placeholder="Search portfolio..."
                    className="flex-1 h-12 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
                  />
                  <button
                    onClick={() => setOpen(false)}
                    suppressHydrationWarning
                    className="p-1 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <Command.List className="max-h-80 overflow-y-auto p-2">
                  <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                    No results found.
                  </Command.Empty>

                  {/* Navigation */}
                  <Command.Group heading="Navigation" className="pb-2">
                    <Command.Item
                      onSelect={() => runCommand(() => router.push("#about"))}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-foreground rounded-md cursor-pointer data-[selected=true]:bg-muted"
                    >
                      <User className="w-4 h-4 text-muted-foreground" />
                      About
                    </Command.Item>
                    <Command.Item
                      onSelect={() => runCommand(() => router.push("#experience"))}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-foreground rounded-md cursor-pointer data-[selected=true]:bg-muted"
                    >
                      <Briefcase className="w-4 h-4 text-muted-foreground" />
                      Experience
                    </Command.Item>
                    <Command.Item
                      onSelect={() => runCommand(() => router.push("#projects"))}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-foreground rounded-md cursor-pointer data-[selected=true]:bg-muted"
                    >
                      <FolderGit2 className="w-4 h-4 text-muted-foreground" />
                      Projects
                    </Command.Item>
                    <Command.Item
                      onSelect={() => runCommand(() => router.push("#contact"))}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-foreground rounded-md cursor-pointer data-[selected=true]:bg-muted"
                    >
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      Contact
                    </Command.Item>
                  </Command.Group>

                  {/* Projects */}
                  <Command.Group heading="Projects" className="pb-2">
                    {projects.slice(0, 4).map((project) => (
                      <Command.Item
                        key={project.id}
                        onSelect={() =>
                          runCommand(() => {
                            router.push("#projects")
                          })
                        }
                        className="flex items-center gap-3 px-3 py-2 text-sm text-foreground rounded-md cursor-pointer data-[selected=true]:bg-muted"
                      >
                        <FolderGit2 className="w-4 h-4 text-muted-foreground" />
                        {project.title}
                      </Command.Item>
                    ))}
                  </Command.Group>

                  {/* Quick Actions */}
                  <Command.Group heading="Quick Actions" className="pb-2">
                    <Command.Item
                      onSelect={() =>
                        runCommand(() =>
                          window.open(siteConfig.resumeUrl, "_blank")
                        )
                      }
                      className="flex items-center gap-3 px-3 py-2 text-sm text-foreground rounded-md cursor-pointer data-[selected=true]:bg-muted"
                    >
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      Download Resume
                    </Command.Item>
                    <Command.Item
                      onSelect={() =>
                        runCommand(() =>
                          window.open(`mailto:${siteConfig.email}`, "_blank")
                        )
                      }
                      className="flex items-center gap-3 px-3 py-2 text-sm text-foreground rounded-md cursor-pointer data-[selected=true]:bg-muted"
                    >
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      Send Email
                    </Command.Item>
                  </Command.Group>
                </Command.List>

                <div className="flex items-center justify-between px-4 py-2 border-t border-border text-xs text-muted-foreground">
                  <span>Navigate with ↑↓</span>
                  <span>Select with ↵</span>
                </div>
              </Command>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
