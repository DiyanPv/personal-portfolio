import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title:"Diyan Yanev - DevOps Engineer",
  description:
    "Professional portfolio showcasing expertise in DevOps, cloud infrastructure, automation, and CI/CD. Experienced with AWS, Kubernetes, Terraform, and modern DevOps practices.",
  keywords: "DevOps, Cloud Engineer, AWS, Kubernetes, Terraform, CI/CD, Infrastructure, Automation",
  authors: [{ name: "Diyan Yanev" }],
  openGraph: {
    title: "Diyan Yanev - DevOps Engineer",
    description: "Professional portfolio showcasing expertise in DevOps, cloud infrastructure, automation, and CI/CD.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
