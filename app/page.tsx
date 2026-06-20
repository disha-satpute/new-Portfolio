import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ProjectsSection } from "@/components/sections/projects"
import { ExperienceSection } from "@/components/sections/experience"
import { AskDishaAgent } from "@/components/sections/ask-disha"
import { AchievementsSection } from "@/components/sections/achievements"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { AIChatAssistant } from "@/components/ai-assistant"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <AskDishaAgent />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
      <AIChatAssistant />
    </>
  )
}
