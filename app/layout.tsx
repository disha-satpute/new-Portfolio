import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: 'Disha Satpute | Full-Stack Developer & AI/ML Engineer',
  description: 'Computer Engineering student focused on Full Stack Development, AI/ML, and Product Engineering. Building scalable applications and intelligent systems.',
  keywords: ['Full-Stack Developer', 'AI/ML Engineer', 'React', 'Node.js', 'Python', 'Machine Learning'],
  authors: [{ name: 'Disha Satpute' }],
  openGraph: {
    title: 'Disha Satpute | Full-Stack Developer & AI/ML Engineer',
    description: 'Building scalable applications and intelligent systems.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disha Satpute | Full-Stack Developer & AI/ML Engineer',
    description: 'Building scalable applications and intelligent systems.',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f0fdfa' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
