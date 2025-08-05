"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "DevOps Engineer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 80)

    return () => clearInterval(timer)
  }, [])
  
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/Diyan-Yanev-CV.pdf"; // Relative path to the file in the public/cv folder
    link.download = "Diyan-Yanev-CV.pdf"; // Suggested filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/90 to-indigo-900" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 animate-gradient-x" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col justify-between min-h-[calc(100vh-5rem)]">
          {/* Main content centered */}
          <div className="text-center flex-1 flex flex-col justify-center py-16">
            {/* Name - smaller and centered */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">Diyan Yanev</h1>

            {/* Subtitle - smaller */}
            <div className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 h-8 flex items-center justify-center">
              <span className="font-light">
                {text}
                <span className="animate-pulse text-blue-400">|</span>
              </span>
            </div>

            {/* Description - smaller and more compact */}
            <p className="text-sm md:text-base text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed font-light">
              Crafting scalable infrastructure with modern DevOps practices and cloud technologies.
              <br />
              Passionate about automation, reliability, and building systems that make a difference.
            </p>

            {/* CTA Buttons - smaller */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
              <Button
                size="default"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-blue-500/25"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="default"
                onClick={handleDownloadCV}
                className="px-6 py-2 rounded-full font-medium border-gray-400/50 text-gray-300 hover:bg-white/10 hover:border-gray-300 transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social links - smaller and closer to content */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/DiyanPv"
                className="text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10 backdrop-blur-sm transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/diyan-p-b640b120a/"
                className="text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10 backdrop-blur-sm transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:diyanpetrov61@gmail.com"
                className="text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10 backdrop-blur-sm transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Bottom section - arrow aligned to bottom */}
          <div className="flex justify-center pb-8">
            <button
              onClick={() => {
                const aboutSection = document.querySelector("#about")
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="animate-bounce cursor-pointer transform hover:scale-110 transition-all duration-300"
              aria-label="Scroll to about section"
            >
              <ChevronDown className="w-10 h-10 text-gray-400 hover:text-white transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
